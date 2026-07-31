addEventListener('fetch', event => {
  event.respondWith(new Response(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>توتي فروتي</title>

<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Tahoma,sans-serif}
body{background:#fffaf4;color:#333}
header{background:linear-gradient(90deg,#ff9800,#ff5722);color:#fff;padding:25px;text-align:center}
nav{display:flex;justify-content:center;flex-wrap:wrap;background:#ff7043}
nav a{color:#fff;text-decoration:none;padding:15px 20px;font-weight:bold}
nav a:hover{background:#e64a19}
.hero{padding:70px 20px;text-align:center;background:linear-gradient(#fff3e0,#ffe0b2)}
.hero h1{font-size:42px}
.hero p{margin:15px 0;font-size:20px}
.btn{display:inline-block;background:#ff5722;color:#fff;padding:12px 24px;border-radius:30px;text-decoration:none}
section{padding:40px 20px}
h2{text-align:center;color:#ff5722;margin-bottom:25px}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
.card{background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 5px 15px rgba(0, 0, 0, 0.15);transition:.3s}
.card:hover{transform:translateY(-8px)}
.card img{width:100%;height:170px;object-fit:cover}
.card h3{padding:10px}
.card p{padding:0 10px 10px}
.card button{margin:10px;background:#ff5722;color:#fff;border:none;padding:10px 15px;border-radius:8px;cursor:pointer}
.offer{background:#fff3cd;border-right:6px solid orange;padding:20px;border-radius:10px;text-align:center}
form{max-width:500px;margin:auto}
input,textarea{width:100%;padding:12px;margin:10px 0;border:1px solid #ccc;border-radius:8px}
button{background:#ff5722;color:#fff;border:none;padding:12px;border-radius:8px;cursor:pointer}
.whatsapp{position:fixed;bottom:20px;left:20px;background:#25D366;color:white;padding:15px;border-radius:50%;text-decoration:none;font-size:24px}
footer{background:#333;color:#fff;text-align:center;padding:20px;margin-top:40px}
</style>
</head>

<body>

<header>
<h1>🍓 توتي فروتي</h1>
<p>عصائر طبيعية وفواكه طازجة كل يوم</p>
</header>

<nav>
<a href="#products">المنتجات</a>
<a href="#offers">العروض</a>
<a href="#order">الطلب</a>
<a href="#contact">التواصل</a>
</nav>

<section class="hero">
<h1>استمتع بألذ العصائر الطبيعية</h1>
<p>نكهات طازجة وجودة عالية بأسعار مميزة</p>
<a class="btn" href="#products">ابدأ التسوق</a>
</section>

<section id="products">
<h2>🥤 منتجاتنا</h2>

<div class="cards">

<div class="card">
<img src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600">
<h3>عصير مانجو</h3>
<p>15 ريال</p>
<button>إضافة للسلة</button>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=600">
<h3>عصير فراولة</h3>
<p>14 ريال</p>
<button>إضافة للسلة</button>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=600">
<h3>كوكتيل فواكه</h3>
<p>18 ريال</p>
<button>إضافة للسلة</button>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600">
<h3>سلطة فواكه</h3>
<p>20 ريال</p>
<button>إضافة للسلة</button>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600">
<h3>برتقال طبيعي</h3>
<p>12 ريال</p>
<button>إضافة للسلة</button>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600">
<h3>سموثي مشكل</h3>
<p>19 ريال</p>
<button>إضافة للسلة</button>
</div>

</div>

</section>

<section id="offers">
<h2>🔥 العروض</h2>

<div class="offer">
<h3>اشترِ عصيرين واحصل على الثالث مجاناً</h3>
<p>العرض ساري لفترة محدودة.</p>
</div>

</section>

<section id="order">
<h2>🛒 اطلب الآن</h2>

<form>
<input type="text" placeholder="الاسم">
<input type="tel" placeholder="رقم الجوال">
<textarea placeholder="اكتب طلبك"></textarea>
<button>إرسال الطلب</button>
</form>

</section>

<section id="contact">
<h2>📞 تواصل معنا</h2>
<p>للطلب والاستفسار: 0500000000</p>
</section>

<a class="whatsapp" href="https://wa.me/966500000000">💬</a>

<footer>
<p>© 2026 توتي فروتي - جميع الحقوق محفوظة</p>
</footer>

</body>
</html>`, {
    headers: { "Content-Type": "text/html; charset=utf-8" }
  }));
});