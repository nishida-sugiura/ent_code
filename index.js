<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>coco medaka 35</title>


<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/style_spinner.css">


    <!--Bootstrap----20220705-1943--->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>

</head>
<body>

<div id="main">

<section>

<!--	-->
<!--　　<h1 class="m">コード入力でCocoポイントGET</h1>　　　-->

<h2>コード入力画面</h2>



	
<!--<h1 class="tp"><img src="top_deposit.jpg"></h1><h1 class="tp"><img src="top_htu.jpg"></h1>--->





<form id="form1">
 	

<h1 class="m1"><br></h1>	


<div class="box-simple4">
    <p>
	
<h1 class="m">　５桁の数字を入力してから　<br>確定ボタンを押してください</h1>

</p>	
</div>	
<h1 class="m1"><a href="a_point.html">Cocoポイントについて</a></h1>
	
  <h1 class="ss"><input type="number" name="serialcode" min="10000" max="999999" oninput="javascript: this.value = this.value.slice(0, 5);" style="width:7em;" style=”ime-mode:disabled;" class="code" placeholder=" 00000" required></h1>

<h1 class="m1">※コードは代金をお支払い後に入力してください。</h1>
<h1 class="m1">※結果はLineのトーク画面に出力されます。</h1>

<h5><div><input type="submit" value="確定する" class="button" ></div></h5>



	
</form>






	

<br>
<br>
<h1 class="htu"></h1>
<h1 class="htu"></h1>

<hr style="border:0;border-top:1px solid;">
	
<form id="form2">
<p class="resizeimage">
　　<img id="customButton" src="QR_icon.png" alt="QRコードをスキャン" style="display: block; margin-left: auto; margin-right: 0;" onclick="openQRCodeReader()">
</p>
</form>	

	
	
	
<h1 class="m1">© Coco Medaka35</h1>

<h1 class="htu"></h1>
	




	
<script>



    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>

    <script src="index_modal.js"></script>

<script src="style_modal.js"></script>


 <script src="spinner.js"></script>
 <script src="index.js"></script>
 <script src="liff.js"></script>
	
	
</body>
	
