const assert = require('chai').assert
const expect = require('chai').expect
const {DeleteFirstElement, ConvertCsvToJson} = require('../controllers/filesController')

  let array = [
  {'filename':'filename','number': 'number', 'text':'text', 'hex':'hex'},
  {'filename':'file1','number': '5625695', 'text':'tsdfesdfxt', 'hex':'65958414523695452152563254585232'}]
  let emptyArray = [];
  let numberValue = 1;
  let stringValue = 'hola'
  let nullValue = null
  let undefinedValue = undefined
  let emptyValue = ''
  let csvValue = `file,text,number,hex
  test2.csv,iYVRj
  test2.csv,CiPtbZhObjZRxMAMNyWLX,3254,bf94dccc18cbbe933c0df235de71bd3f`

  
// describe('Array', function () {
  describe('Pruebas para: DeleteFirstElement', function () {
    it('Array Vacío', function () {
      assert.equal(DeleteFirstElement(emptyArray), emptyArray);
    });
    it('Tipo de dato devuelto', function () {
      let result = typeof (DeleteFirstElement(array))
      assert.equal(result, 'object');
    });
    it('Enviar parametro Numerico', function () {
      let result = (DeleteFirstElement(numberValue))
      expect(typeof(result)) === 'object';
    });
    it('Enviar parametro String', function () {
      let result = (DeleteFirstElement(stringValue))
      expect(typeof(result)) === 'object';
    });
  });

// });