const {  StatusCodes } = require('http-status-codes')
const {FileList} = require('../utils/request')

const getAllFiles = async(req, res) =>{

    const data = await FileList()

    return res.status(StatusCodes.OK).json({data})

}

module.exports = {
    getAllFiles
}