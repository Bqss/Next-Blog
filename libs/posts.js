import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html"

const postDirectory = path.join(process.cwd(), 'pages/posts')

export function getSortedPostsData (){
    let fileNames = fs .readdirSync(postDirectory);
    fileNames = [...fileNames].filter(filename => filename.split(".")[1]== "md");

    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md/,'');
        const fullPath = path.join(postDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        const matterResult = matter(fileContents);
        return {id, ...matterResult.data};
    }) 


    return allPostsData.sort((a,b) => a.date < b.date);
}

export function getAllPostIds(){
    const fileNames = fs.readdirSync(postDirectory)
    return fileNames.map(fileName => ({params:{id: fileName.replace(/\.md$/,'')}}))
}

export async function getPostData(id){
    const fullPath = path.join(postDirectory,`${id}.md`);
    const fileContents  =fs.readFileSync(fullPath,'utf-8');
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content)
    
    return{
        id,
        content : processedContent.toString(),
        ...matterResult.data
    }
}



