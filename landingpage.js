// <!--Here I created the trendingOffersData array -->    
var trendingOffersData=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/39/17_1009_CucumberExtract_US17_1009_CucumberExtract_US-014239.jpg",name:"SkinCeuticals Gift",content:" Recive a SkinCeuticals Triple Lipid Restore 2:4:2 Sample Whwn You Spend $150 or more than on the brand",pageUrl:"Product1.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/03/Square_tns_plus-034003.png",name:"10% off SkinMedica+ $13Gift",content:"10% off on SkinMedica +recive a SkinMedica Instant Bright Eye Cream .07oz(worth$13) When you spend $130 or more than on the brand",pageUrl:"Product2.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/52/original-original-500x500-085431-033952.jpg",name:"25% off Chrsitophe Robin with code FRIENDS+Gift",content:"Recive a christophe Robin cleansingVolumizing deluxe paste 12ml (free Gift)When You spend 80$or more.",pageUrl:"Product1.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/39/original-BioSerum%2B_500x500-034739.jpg",name:"25% off Chantaceile with code FRIENDS",content:"Chantaceile sets a luxurious standard in the world of modern botanical skincare and cosmetics",pageUrl:"Product2.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/57/original-0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot11-500x500-034757.png",name:"25% off Elemis with code FRIENDS + $32 Gift ",content:"Plus,recieve an Eleims pro collagen Marine Moisture Essence 28ml(worth$32)when you spend 60%or more than on the brand ",pageUrl:"Product3.html"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/54/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot09-500x500-034554.jpg",name:"25% off Natura Bisse with code FRIENDS",content:"Natura Bisse is a family owned luxury skincare company delivering innovating experiences and products that yield transformative results.",pageUrl:"Product4.html"},
];


trendingOffersData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
        boxp.textContent=elem.content
    var boxbtm=document.createElement("button")
        boxbtm.textContent="SHOP NOW"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxbtm)
        document.querySelector("#trendingOffers").append(boxDiv) 
});

// <!--created the rightNowOffersData array -->    
var rightNowOffersData=[{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13547807-1444926019361532.jpg",name:"SkinCeuticals AM/PM Replenishing Antioxidant Regimen Worth $449",bPrice:0,aPrice:395.12,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232822-1544908361367298.jpg",name:"SkinStore Selects Limited Edition Collection (Worth Over $350)",bPrice:111.00,aPrice:55.50,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13232824-6374902588484311.jpg",name:"SkinStore Holiday Edit 2021 (Worth Over $500)",bPrice:150.00,aPrice:75,pageUrl:"######"},
{image:"https://static.thcdn.com/images/large/webp//productimg/300/300/13468234-5434916661811767.jpg",name:"Decorté Liposome Advanced Repair Serum (Various Sizes)",bPrice:0,aPrice:75,pageUrl:"######"},

];


rightNowOffersData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
         check0(elem.bPrice);
         function check0(val){
        if(val!=0){
            boxp.innerHTML=`MSRP:<s>$${elem.bPrice.toFixed(2)}</s>`
        }else{
            boxp.innerHTML= "<br>"
        }
         }
       
    var boxh5=document.createElement("h5")
        boxh5.innerHTML=`$${elem.aPrice.toFixed(2)}`
    var boxbtm=document.createElement("button")
        boxbtm.textContent="SHOP NOW"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxh5,boxbtm)
        document.querySelector("#rightNowOffers").append(boxDiv) 
});

// <!--created the BlogData array -->    
var BlogData=[{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-pexels-kristin-vogt-54204-1_16-025300.jpg",name:"How to Protect Your Skin This Winter",content:"To help you in your search for the best skincare for dry skin in winter, we’ve curated a list of the best products to combat dry skin.",pageUrl:"######"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-Webp.net-resizeimage_%2827%29-025305.jpg",name:"Hydration 101: Ingredient Focus",content:"Here are some of the top products that every moisture-starved skin type deserves during these winter months!",pageUrl:"######"},
{image:"https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-Untitled_design_-_2021-11-10T153711.183-083736.png",name:"Winter Skincare Routine",content:"We’re on hand to provide you with the very best products to keep your skin in optimum condition all season long.",pageUrl:"######"},

];


     BlogData.map(function(elem){
    var boxDiv=document.createElement("div")
    var boxImage=document.createElement("img")
        boxImage.setAttribute("src",elem.image)
    var boxh3=document.createElement("h3")
        boxh3.textContent=elem.name
    var boxp=document.createElement("p")
        boxp.textContent=elem.content
    var boxbtm=document.createElement("button")
        boxbtm.textContent="READ MORE"
        boxbtm.addEventListener("click", function(){
            window.location.href=elem.pageUrl
        });
        
        boxDiv.append(boxImage,boxh3,boxp,boxbtm)
        document.querySelector("#Blog").append(boxDiv) 
});

function navSlideOut(){
    document.querySelector("#nav-link").style.left="-16px"
}
function navSlideIn(){
   document.querySelector("#nav-link").style.left="-2000px"
}
var cartLength =JSON.parse(localStorage.getItem("cartthings"))
document.querySelector("#cardAval").innerHTML=`There are currently ${cartLength.length} items in your cart.`;
document.querySelector("#cartLen").innerHTML=`${cartLength.length}`;