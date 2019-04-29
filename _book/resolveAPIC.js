const fs = require('fs')
const path = require('path')



const functionImportFile = path.join('./', 'functions', 'Functions.md')
const functionsOutputFile = path.join('./', 'resolveOutput', 'functions')
const contextImprotFolder = path.join('./', 'context')
const keywordImportFolder = path.join('./', 'data_struct')

const resolveFunctions = () => {
    functionsMD = fs.readFileSync(functionImportFile).toString();
    const re = /## `([\s\S]+?)`<div/g;
    const tempR = functionsMD.match(re)
    const functions = tempR.map(e => e.slice(4).slice(0, e.slice(4).length - 5))
    const functionsStr = functions.map(f => `"${f}"`)
    fs.writeFile(functionsOutputFile, '')
    fs.appendFile(functionsOutputFile, functionsStr.join(',\n'))
}

const resolveContext = () => {
    const re = /`([\s\S]+?)`/g;
    let contexts = [];
    const files = fs.readdirSync(contextImprotFolder)
    files.forEach(f => {
        console.log(f, '----')
        const fileContent = fs.readFileSync(f).toString()
        const context = fileContent.match(re)
        contexts.push(context)
    })
    console.log(contexts)

}

resolveFunctions()
resolveContext()