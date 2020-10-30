var p = document.getElementById('text');

//タイピングする文字列をここで用意しておく
var textLists = [
    'Hello World',
    'This is my App',
    'How are you?',
    'Hello Hello',
    'I love JavaScript!',
    'Good morning',
    'I am Japanese',
    'Let it be'
];
var checkTexts = [];

createText();

function createText() {
    //文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);

    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';
    
    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}
