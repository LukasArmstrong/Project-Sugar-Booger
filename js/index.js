var names=["The Ultimate Reese\'s Cupcake",
           "Peanut Butter Hi-Hat Cupcakes",
           "Chocolate Cookies and Cream Cupcakes",
           "Caramel Brownies",
           "Peanut Butter Chocolate Chip Brownies",
           "Sinckers Brownies",
           "Cookies and Cream Cookies",
           "Double Chocolate Cookies",
           "Mint Chip Oreos"];
var description=[`This recipe is the ULTIMATE Reese’s Peanut Butter Cup Cupcake! With swirled chocolate peanut butter cake and
swirled chocolate peanut butter buttercream then topped with a peanut butter cup... I think you can see why it’s the ultimate
Reese’s cupcake!`,]
function print(message) {
  document.write(message);
}
var gen1=`
  <li>
    <p>`
var gen2=`
    </P>
    <img id="myImg`
var test=`" src="img/`;
var gen3= `" alt="">
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="modal-body">
          <img src="img/`;
var gen4= `" alt="" id="img01">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
      </div>
    </div>
  </li>
`;
var div= '</div>';
var html;
var i;
var html2;
var html3;
var cakes=`<div class="cakes col">
  <h2>Cakes and Cupcakes</h2>
`
var brownies=`<div class="Brownies col">
  <h2>Brownies</h2>
`
var cookies=`<div class="Cookies col">
  <h2>Cookies</h2>
`;
print(cakes);
for(i=0;i<3;i++){
  html1 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html1);
};
print(div);
print(brownies);
for(i=3;i<6;i++){
  html2 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html2);
};
print(div);
print(cookies);
for(i=6;i<9;i++){
  html3 = gen1+names[i]+gen2+i+test+names[i]+".jpg"+gen3+names[i]+".jpg"+gen4;
  print(html3);
};
print(div);
