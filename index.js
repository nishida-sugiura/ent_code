var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();






$(function () {
    // 送信
    $('#form1').submit(function () {
  
        var s_code = $('input[name="serialcode"]').val();
        


        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});
        
    let msg={};
    
       msg = ["code：" + s_code] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
});


function openQRCodeReader() {
    liff.scanCode()
        .then(result => {
            if (result.value) {
                // QRコードのスキャンが成功した場合
                // スキャン結果を利用して何かを行う
                console.log("QRコードスキャン結果:", result.value);

                let qr_data = result.value;
                
                
                let aaa = ["qr_data:" + qr_data];

                sendText(aaa);
            }
        })
        .catch(err => {
            console.error(err);
        });
}


