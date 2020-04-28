/* 
 * This script is used on brewchooser.me to scrape the plug-in table for which beer is at 
 * the top of the chart after sorting, through the dropdown menus. It just takes the name of the beer in the top row and returns the
 * BeerAdvocate URL for the beer type, allowing the user to see options.
 */


<button onclick="beerbois()">Click for Suggestions</button>

<script>
function beerbois(){
var beers = [
  ["German Bock", "32"],
  ["German Doppelbock", "35"],
  ["German Eisenbock","36"],
  ["German Maibock","33"],
  ["German Weizenbock","92"],
  ["American Brown Ale","73"],
  ["English Brown Ale","74"],
  ["English Dark Mild Ale","75"],
  ["German Altbier","86"],
  ["American Black Ale","175"],
  ["Belgian Dark Ale","119"],
  ["Belgian Dubbel","57"],
  ["German Roggenbier","18"],
  ["Scottish Ale","68"],
  ["Winter Warmer","47"],
  ["American Amber/Red Lager","147"],
  ["German Marzen","29"],
  ["German Rauchbier","7"],
  ["German Schwarzbier","31"],
  ["Munich Dunkel Lager","46"],
  ["Vienna Lager","30"],
  ["American Cream Ale","6"],
  ["Biere Brut","141"],
  ["Braggot","114"],
  ["California Common/Steam Beer","132"],
  ["American Brut IPA","199"],
  ["American Imperial IPA","140"],
  ["American IPA","116"],
  ["Belgian IPA","174"],
  ["English IPA","150"],
  ["New England IPA/Hazy IPA","189"],
  ["American Amber","128"],
  ["American Blonde Ale","99"],
  ["American Pale Ale","97"],
  ["Belgian Blonde Ale","190"],
  ["Belgian Pale Ale","54"],
  ["Belgian Saison","129"],
  ["English Bitter","98"],
  ["English Strong Bitter","66"],
  ["English Pale Ale","154"],
  ["English Pale Mild Ale","76"],
  ["French Biere de Garde","127"],
  ["German Kolsch","85"],
  ["Irish Red Ale","161"],
  ["American Adjunct Lager","38"],
  ["American Imperial Pilsner","164"],
  ["American Lager","155"],
  ["American Light Lager","39"],
  ["American Malt Liquor","42"],
  ["Bohemian Pilsner","40"],
  ["Dortmunder","20"],
  ["European Pale Lager","37"],
  ["European Strong Lager","43"],
  ["German Helles","21"],
  ["Zwickelbier","131"],
  ["German Pilsner","41"],
  ["American Imperial Porter","192"],
  ["American Porter","159"],
  ["Baltic Porter","80"],
  ["English Porter","101"],
  ["Robust Porter","193"],
  ["Smoke Porter","194"],
  ["Chile Beer","163"],
  ["Finnish Sahti","148"],
  ["Fruit and Field Beer","9"],
  ["Herb and Spice Beer","8"],
  ["Japanese Rice Lager","169"],
  ["Low Alcohol Beer","5"],
  ["Pumpkin Beer","72"],
  ["Rye Beer","12"],
  ["Smoke Beer","11"],
  ["American Imperial Stout","157"],
  ["American Stout","158"],
  ["English Oatmeal Stout","69"],
  ["English Stout","13"],
  ["Milk Stout","82"],
  ["Foreign Stout","95"],
  ["Irish Dry Stout","162"],
  ["Russian Imperial Stout","84"],
  ["American Barleywine","19"],
  ["American Imperial Red Ale","191"],
  ["American Strong Ale","78"],
  ["American Wheatwine Ale","60"],
  ["Belgian Quadrupel","142"],
  ["Belgian Strong Dark Ale","56"],
  ["Belgian Strong Pale Ale","55"],
  ["Belgian Tripel","58"],
  ["British Barleywine","152"],
  ["English Old Ale","79"],
  ["English Strong Ale","165"],
  ["Scotch Ale","77"],
  ["American Dark Wheat Ale","94"],
  ["American Pale Wheat Ale","93"],
  ["Belgian Witbier","48"],
  ["Berliner Weisse","87"],
  ["German Dunkelweizen","91"],
  ["German Hefeweizen","89"],
  ["German Kristalweizen","90"],
  ["American Brett","198"],
  ["American Wild Ale","171"],
  ["Belgian Faro","15"],
  ["Belgian Fruit Lambic","10"],
  ["Belgian Gueuze","14"],
  ["Belgian Lambic","50"],
  ["Flanders Oud Bruin","52"],
  ["Flanders Red Ale","53"],
  ["Leipzig Gose","16"],
    ];

var x = document.getElementsByClassName("column-1");
for (i=0; i<107; i++){
if(x[1].innerHTML === beers[i][0]){
window.open("http://beeradvocate.com/beer/styles/"+beers[i][1]+"/");
break;
    }
    else{ 
continue;
    }
}
}
</script>