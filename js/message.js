var APP_ID = 'Wp47QTEzutMIRHN2HE855Sh6-gzGzoHsz';
var APP_KEY = 'ijeF3gABTfwBIgJXBmAsKD2i';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message')
query.find().then(function(messages){
    let array = messages.map((item)=> item.attributes)
    array.forEach((item)=>{
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
})

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        name:name,
        content:content
    }).then(function(object){
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        myForm.querySelector('input[name=name]').value = ''
        console.log(object)
    })
})























// console.log(1)
// //创建TestObject 表
// var TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据  new一个实例
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })