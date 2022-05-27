const {  StatusCodes } = require('http-status-codes')
const {FileList,FileByName} = require('../utils/request')


const getAllFiles = async(req, res) =>{

    const data = await FileList()
    return res.status(StatusCodes.OK).json({data})
}

const getFileByName = async(req, res) =>{

    const data = await FileByName(req.params.filename)
    const convertedData = await ConvertCsvToJson(data)
    const optimizedData = await DeleteFirstElement(convertedData)
    const formatFile = await FormatFile(optimizedData)

    return res.status(StatusCodes.OK).json(formatFile)

}

const DeleteFirstElement = async(array = []) =>{

    if(array.length > 0){
        array.shift();
    
        return array
        

    }else{
        return array
    }
}

const ConvertCsvToJson = async(csv = []) =>{
    if(csv !== null && csv !== undefined){
        
        const lines = csv.split('\n')
        const result = []
        const headers = lines[0].split(',')

        lines.map(l => {
            const obj = {}
            const line = l.split(',')

            headers.map((h, i) => {
                obj[h] = line[i]
            })

            result.push(obj)
        })

        return JSON.parse(JSON.stringify(result))
    
    }else{
        return csv
    }
    }

const FormatFile = async(file = []) =>{

    let newArray = []
    

    if(file.length > 0){

        newArray = {
            "file":file[0].file,
            "lines":[]
        }

        file.map((item) =>{
            if(item.file   != '' && item.file   != null && item.file   != undefined && 
               item.text   != '' && item.text   != null && item.text   != undefined &&
               item.number != '' && item.number != null && item.number != undefined &&
               item.hex    != '' && item.hex    != null && item.hex    != undefined){
                
                if(item.hex.length === 32){
                    
                    return newArray.lines.push({
                        "text"  :item.text,
                        "number":item.number,
                        "hex"   :item.hex
                    })

                }

            }
        })

        return newArray
        

    }else{
        return file
    }

}

module.exports = {
    getAllFiles,
    getFileByName
}