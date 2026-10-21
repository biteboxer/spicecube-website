const MENU = [
 {id:"starters", en:"Starters & sides", hu:"Előételek és köretek", img:"wings",
  den:"Soup, cheese sticks, wings and fries.", dhu:"Leves, sajtos rudak, szárnyak és sültkrumpli.",
  items:[
   {en:"Garlic Cheese Sticks", hu:"Fokhagymás sajtos rúd", p:1995, t:["new","veg"], a:[1,7],
    den:"4 freshly baked sticks with garlic butter and melted mozzarella.", dhu:"4 db frissen sült rúd, fokhagymás vajjal és olvasztott mozzarellával."},
   {en:"Cheese Sticks (2 pcs)", hu:"Sajtos rudak (2 db)", p:1650, t:["veg"], a:[1,7],
    den:"2 oven-baked cheese sticks with melted mozzarella and seasoning.", dhu:"2 db sütőben sült sajtos rúd, olvadt mozzarellával és fűszerekkel."},
   {en:"Peri Peri Wings (6 pcs)", hu:"Peri peri szárnyak (6 db)", p:1850, t:["hot"],
    den:"Six wings marinated in peri peri and grilled.", dhu:"Hat peri peri szószban pácolt, grillezett csirkeszárny."},
   {en:"Red Lentil Soup", hu:"Vöröslencse leves", p:1250, t:["veg"],
    den:"A hearty soup of red lentils and spices.", dhu:"Laktató leves vöröslencséből és fűszerekből."},
   {en:"Masala Fries", hu:"Masala sültkrumpli", p:1450, t:["new","veg","hot"],
    den:"Spiced fries with a dip of your choice.", dhu:"Fűszeres sültkrumpli, választható mártással."},
   {en:"Crispy Fries", hu:"Ropogós sültkrumpli", p:1450, t:["veg"],
    den:"Golden, crisp outside and soft inside.", dhu:"Aranybarna, kívül ropogós, belül puha."},
   {en:"Crispy Potato Wedges", hu:"Ropogós burgonyagerezd", p:1695, t:["veg"],
    den:"Seasoned potato wedges, fried until crisp.", dhu:"Fűszerezett, ropogósra sütött burgonyagerezdek."}
  ]},
 {id:"pizza", en:"Deep-pan pizza", hu:"Deep-pan pizzák", img:"pizza-pepperoni", pizza:true,
  den:"A slice of England in Budapest. Three sizes.", dhu:"Egy falat Anglia Budapesten. Három méretben.",
  items:[
   {en:"Margherita", hu:"Margherita", p:[2995,3850,4750], t:["veg"], a:[1,7], den:"Mozzarella, tomato and Italian herbs", dhu:"Mozzarella, paradicsom és olasz fűszerek"},
   {en:"Chicken Corn", hu:"Csirkés kukorica", p:[2995,3495,4495], a:[1,7], den:"Mozzarella, tomato, chicken and sweetcorn", dhu:"Mozzarella, paradicsom, csirke és kukorica"},
   {en:"Prosciutto", hu:"Prosciutto", p:[2995,3495,4495], a:[1,7], den:"Mozzarella, tomato and ham", dhu:"Mozzarella, paradicsom és sonka"},
   {en:"Prosciutto Funghi", hu:"Prosciutto gombával", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, ham and mushrooms", dhu:"Mozzarella, paradicsom, sonka és gomba"},
   {en:"Hawaiian", hu:"Hawaii", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, ham and pineapple", dhu:"Mozzarella, paradicsom, sonka és ananász"},
   {en:"Mafiosa", hu:"Mafiosa", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato and pepperoni", dhu:"Mozzarella, paradicsom és pepperoni"},
   {en:"Americana", hu:"Amerikai", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, pepperoni, onions and peppers", dhu:"Mozzarella, paradicsom, pepperoni, hagyma és paprika"},
   {en:"Mighty Meaty", hu:"Húsimádó", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, pepperoni, ham, chicken and minced meat", dhu:"Mozzarella, paradicsom, pepperoni, sonka, csirke és darált hús"},
   {en:"Seafood", hu:"Tenger gyümölcsei", p:[2495,3495,4495], a:[1,2,4,7], den:"Mozzarella, tomato, tuna and prawns", dhu:"Mozzarella, paradicsom, tonhal és garnélarák"},
   {en:"Pescatori", hu:"Halász", p:[2495,3495,4495], a:[1,2,4,7], den:"Mozzarella, tomato, tuna, prawns and garlic", dhu:"Mozzarella, paradicsom, tonhal, garnélarák és fokhagyma"},
   {en:"Pollo", hu:"Csirke", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato and chicken", dhu:"Mozzarella, paradicsom és csirke"},
   {en:"Pollo e Funghi", hu:"Csirke és gomba", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, chicken and mushrooms", dhu:"Mozzarella, paradicsom, csirke és gomba"},
   {en:"Cannelloni", hu:"Cannelloni", p:[2495,3495,4495], a:[1,7], den:"Mozzarella, tomato, minced meat and onions", dhu:"Mozzarella, paradicsom, darált hús és hagyma"},
   {en:"SpiceCube Special", hu:"SpiceCube különlegesség", p:[2495,3495,4495], t:["hot"], a:[1,7], den:"Mozzarella, tomato, chicken, onion, peppers, chillies and sweetcorn", dhu:"Mozzarella, paradicsom, csirke, hagyma, paprika, chili és kukorica"},
   {en:"Tandoori Special", hu:"Tandoori különlegesség", p:[2495,3495,4495], t:["hot"], a:[1,7], den:"Garlic base, mozzarella, fresh tomato, chicken, peppers, sweetcorn and chilli", dhu:"Fokhagymás alap, mozzarella, friss paradicsom, csirke, paprika, kukorica és chili"},
   {en:"Vegetarian", hu:"Vegetáriánus", p:[2495,3495,4495], t:["veg"], a:[1,7], den:"Mozzarella, tomato, onions, peppers, sweetcorn and mushrooms", dhu:"Mozzarella, paradicsom, hagyma, paprika, kukorica és gomba"},
   {en:"Funghi", hu:"Gomba", p:[2495,3495,4495], t:["veg"], a:[1,7], den:"Mozzarella, tomato and mushrooms", dhu:"Mozzarella, paradicsom és gomba"},
   {en:"Garlic Bread", hu:"Fokhagymás kenyér", p:[2495,3495,4495], t:["veg"], a:[1,7], den:"Freshly baked with garlic butter and mozzarella", dhu:"Frissen sütve, fokhagymás vajjal és mozzarellával"}
  ]},
 {id:"burgers", en:"Smash burgers", hu:"Smash burgerek", img:"burger",
  den:"Homemade buns and our secret sauce.", dhu:"Házi zsemle és titkos szószunk.",
  note:{en:"Make it a meal with fries and a drink for +1 450 Ft.", hu:"Sültkrumplival és itallal menü: +1 450 Ft."},
  items:[
   {en:"Tax Smash Hamburger", hu:"Tax Smash hamburger", p:2995, den:"Juicy beef patty on a freshly baked bun with our special sauce and cheese.", dhu:"Szaftos marhahúspogácsa frissen sült zsemlében, speciális szószunkkal és sajttal."},
   {en:"Tax Smash Cheese Burger", hu:"Tax Smash sajtburger", p:2995, den:"Smashed beef patty with cheese, special sauce, pickles and baked onion.", dhu:"Marhahúspogácsa sajttal, speciális szószunkkal, savanyúsággal és sült hagymával."},
   {en:"Tax Beef Smash Burger", hu:"Tax marhahúsos smash burger", p:2995, t:["hot"], den:"Beef patty with green chilli, cheese, special sauce and pickles.", dhu:"Marhahúspogácsa zöld chilivel, sajttal, speciális szószunkkal és savanyúsággal."},
   {en:"Tax Smash Hawaiian Burger", hu:"Tax Smash hawaii burger", p:3295, den:"Smashed beef patty with cheese, special sauce, pickles and a slice of pineapple.", dhu:"Marhahúspogácsa sajttal, speciális szószunkkal, savanyúsággal és ananászszelettel."},
   {en:"Tax Smash Jalapeño Burger", hu:"Tax Smash jalapeño burger", p:3295, t:["hot"], den:"Beef patty with special sauce, cheese, pickles and jalapeños.", dhu:"Marhahúspogácsa speciális szószunkkal, sajttal, savanyúsággal és jalapeñóval."},
   {en:"Tax Double Smash Cheese Burger", hu:"Tax dupla smash sajtburger", p:3995, den:"Two beef patties with cheese, special sauce and pickles.", dhu:"Dupla marhahúspogácsa sajttal, speciális szószunkkal és savanyúsággal."},
   {en:"Tax Smash BBQ Burger", hu:"Tax Smash BBQ burger", p:3995, den:"Two beef patties, double cheddar, BBQ sauce, crispy onion and lettuce.", dhu:"Dupla marhahúspogácsa, dupla cheddar, BBQ szósz, ropogós hagyma és saláta."}
  ]},
 {id:"peri", en:"Peri peri chicken", hu:"Peri peri csirke", img:"peri-chicken",
  den:"Marinated in peri peri and slow-grilled.", dhu:"Peri peri szószban pácolva, lassan grillezve.",
  items:[
   {en:"Quarter Peri Peri Chicken", hu:"Negyed peri peri csirke", p:2295, t:["hot"], den:"A quarter chicken marinated and slow-grilled in peri peri sauce.", dhu:"Negyed csirke peri peri szószban pácolva és grillezve."},
   {en:"Half Peri Peri Chicken", hu:"Fél peri peri csirke", p:4595, t:["hot"], den:"Half a chicken marinated and slow-grilled in peri peri sauce.", dhu:"Fél csirke peri peri szószban pácolva és grillezve."},
   {en:"Whole Peri Peri Chicken", hu:"Egész peri peri csirke", p:7995, t:["hot"], den:"A whole chicken marinated and slow-grilled in peri peri sauce.", dhu:"Egész csirke peri peri szószban pácolva és grillezve."}
  ]},
 {id:"curries", en:"Curries & biryani", hu:"Curryk és biryani", img:"curry-tray",
  den:"Pakistani and Indian classics. Beef dishes come with basmati rice or fresh paratha.", dhu:"Pakisztáni és indiai klasszikusok. A marhás ételekhez basmati rizs vagy friss paratha jár.",
  items:[
   {en:"Chicken Biryani", hu:"Csirke biryani", p:2995, den:"Spiced chicken layered with fragrant basmati rice, slow-cooked with herbs and aromatic spices.", dhu:"Fűszeres csirke illatos basmati rizzsel rétegezve, lassan főzve gyógynövényekkel és aromás fűszerekkel."},
   {en:"Butter Chicken with Basmati Rice", hu:"Vajas csirke basmati rizzsel", p:2995, den:"Marinated chicken in a creamy, buttery tomato sauce. One of the most loved Indian dishes.", dhu:"Pácolt csirkedarabok lágy, krémes paradicsomos vajszószban. Az egyik legnépszerűbb indiai fogás."},
   {en:"Chicken Tikka Masala with Basmati Rice", hu:"Csirke tikka masala basmati rizzsel", p:2995, den:"Tender chicken breast in a spiced tomato and cream sauce. A true classic.", dhu:"Pácolt csirkemell fűszeres paradicsomos-tejszínes szószban. Igazi klasszikus."},
   {en:"Chicken Curry with Basmati Rice", hu:"Csirke curry basmati rizzsel", p:2995, den:"Chicken pieces cooked in a home-style spiced curry sauce.", dhu:"Csirkedarabok házias, fűszeres curry szószban főzve."},
   {en:"Keema Matar with Basmati Rice", hu:"Keema matar basmati rizzsel", p:3995, den:"Minced meat cooked with green peas, onions, tomatoes and traditional spices.", dhu:"Darált hús zöldborsóval, hagymával, paradicsommal és hagyományos fűszerekkel főzve."},
   {en:"Beef Tikka Masala", hu:"Marha tikka masala", p:3995, den:"Tender beef in a rich, spiced tomato and cream sauce, with basmati rice or paratha.", dhu:"Omlós marhahús fűszeres paradicsomos-tejszínes szószban, basmati rizzsel vagy parathával."},
   {en:"Beef Curry", hu:"Marha curry", p:3995, den:"Beef simmered in an aromatic curry sauce, with basmati rice or buttered paratha. Spicy and filling.", dhu:"Aromás curry szószban párolt marhahús, basmati rizzsel vagy vajas parathával. Fűszeres és laktató."},
   {en:"Butter Beef", hu:"Vajas marha", p:3995, den:"Beef in a creamy, buttery tomato sauce, with basmati rice or paratha.", dhu:"Marhahús lágy, krémes paradicsomos vajszószban, basmati rizzsel vagy parathával."}
  ]},
 {id:"spinach", en:"Spinach specials", hu:"Spenótos ételek", img:null, glyph:"Palak",
  den:"Palak dishes: spinach slow-cooked with spices.", dhu:"Palak ételek: fűszerekkel lassan főtt spenót.",
  items:[
   {en:"Palak Paneer", hu:"Spenótos paneer", p:2995, t:["veg"], a:[7], den:"Spinach cooked with paneer cheese in aromatic spices.", dhu:"Indiai spenótos étel házi sajttal, fűszeres mártásban."},
   {en:"Palak Chicken", hu:"Spenótos csirke", p:3295, den:"Spinach cooked with tender chicken in aromatic spices.", dhu:"Spenót fűszeres csirkehússal."},
   {en:"Palak Chana", hu:"Spenótos csicseriborsó", p:3295, t:["veg"], den:"Spinach cooked with chickpeas in aromatic spices.", dhu:"Spenót csicseriborsóval, aromás fűszerekkel."},
   {en:"Palak Beef", hu:"Spenótos marhahús", p:4295, den:"Spinach cooked with tender beef in aromatic spices.", dhu:"Spenót fűszeres marhahússal."}
  ]},
 {id:"rice", en:"Rice dishes", hu:"Rizses ételek", img:null, glyph:"Rice",
  den:"Basmati, stir-fried to order.", dhu:"Basmati rizs, rendelésre pirítva.",
  items:[
   {en:"Egg Fried Rice", hu:"Tojásos sült rizs", p:2995, t:["veg"], a:[3], den:"Fragrant basmati stir-fried with egg, vegetables and spices.", dhu:"Illatos basmati rizs tojással, zöldségekkel és fűszerekkel pirítva."},
   {en:"Chicken Fried Rice", hu:"Csirkés sült rizs", p:2995, den:"Basmati stir-fried with chicken, vegetables and spices.", dhu:"Basmati rizs csirkével, zöldségekkel és fűszerekkel pirítva."},
   {en:"Vegetable Fried Rice", hu:"Zöldséges sült rizs", p:2995, t:["veg"], den:"Fragrant basmati cooked with spiced vegetables.", dhu:"Illatos basmati rizs fűszeres zöldségekkel."},
   {en:"Beef Mince Fried Rice", hu:"Darált marhás sült rizs", p:3995, den:"Basmati stir-fried with minced beef, vegetables and spices.", dhu:"Basmati rizs darált marhahússal, zöldségekkel és fűszerekkel pirítva."}
  ]},
 {id:"veg", en:"Vegetarian", hu:"Vegetáriánus ételek", img:null, glyph:"Veg",
  den:"All served with basmati rice.", dhu:"Mindegyik basmati rizzsel.",
  items:[
   {en:"Vegetable Curry", hu:"Zöldség curry", p:2995, t:["veg"], den:"Spiced mixed vegetables in a flavourful curry.", dhu:"Fűszeres vegyes zöldségek ízletes curry szószban."},
   {en:"Chickpea Curry", hu:"Csicseriborsó curry", p:2995, t:["veg"], den:"Hearty chickpeas in a rich, spiced gravy.", dhu:"Tápláló csicseriborsó gazdag, fűszeres szószban."},
   {en:"Dal Chawal", hu:"Dál chawal (lencse rizzsel)", p:2995, t:["veg"], den:"Traditional lentils cooked with aromatic spices.", dhu:"Hagyományos lencse aromás fűszerekkel főzve."},
   {en:"Vegetable Biryani", hu:"Zöldséges biryani", p:2995, t:["veg"], den:"Fragrant basmati cooked with spiced vegetables.", dhu:"Illatos basmati rizs fűszeres zöldségekkel főzve."}
  ]}
];
const DRINKS = {id:"drinks", en:"Drinks", hu:"Italok", glyph:"Chai", den:"Karak chai is brewed slowly with milk and loose tea.", dhu:"A karak chai tejjel és tealevelekkel, lassan fő.",
 groups:[
  {en:"Tea & lassi", hu:"Tea és lassi", rows:[["Karak Chai","Karak tea",795],["Mango Lassi","Mangó lassi",995]]},
  {en:"Soft drinks", hu:"Üdítők", rows:[["Pepsi (can)","Pepsi (dobozos)",695],["Coca-Cola (can)","Coca-Cola (dobozos)",695],["Lemonade","Limonádé",799],["Kids' juice","Gyerek gyümölcslé",499],["Water, still or sparkling","Víz, mentes vagy szénsavas",450]]},
  {en:"Beer (can)", hu:"Sör (dobozos)", rows:[["Argus, Carlsberg, Stella Artois, Borsodi","Argus, Carlsberg, Stella Artois, Borsodi",995],["Alcohol-free beers","Alkoholmentes sörök",895]]},
  {en:"Wine", hu:"Bor", rows:[["Red wine, from","Vörösbor, ettől",4999],["White wine, from","Fehérbor, ettől",4995]]}
 ]};
const ALLERGENS=[["Glutén","Gluten"],["Rákfélék","Crustaceans"],["Tojás","Eggs"],["Halak","Fish"],["Földimogyoró","Peanuts"],["Szójabab","Soybeans"],["Tej","Milk"],["Diófélék, mandula","Nuts"],["Zeller","Celery"],["Mustár","Mustard"],["Szezámmag","Sesame"],["Kén-dioxid és szulfitok","Sulphites"],["Csillagfürt","Lupin"],["Puhatestűek","Molluscs"]];
const HOURS=[ // 0=Sunday
 ["Vasárnap","Sunday","15:00","23:30"],["Hétfő","Monday","17:00","23:30"],["Kedd","Tuesday","15:00","23:30"],["Szerda","Wednesday","15:00","23:30"],["Csütörtök","Thursday","15:00","23:30"],["Péntek","Friday","15:00","23:30"],["Szombat","Saturday","15:00","23:30"]];

