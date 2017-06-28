// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 取得體重的input
    var w = $('#weight').val()
       
    var h = $('#height').val()
    var a = $('#a').val()
    var b = $('#b').val()
        
    w = Number(w)
        
    h = Number(h) 
    a = Number(a) 
     b = Number(b)   
    
    slg= w / h
    obp=b/a
    ops=slg+obp
        
    $('#result').val(ops)
})