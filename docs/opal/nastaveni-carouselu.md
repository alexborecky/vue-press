# Nastavení Carouselu


Hlavním bannerem rozumíme ten, který se zobrazuje jako první při příchodu na náš e-shop a ten, který má největší rozměry.

<iframe 
    width="100%" 
    height="400" 
    src="https://www.youtube.com/embed/qhgvgkP6yzA"
    frameborder="0" 
    allow="accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture" 
    allowfullscreen>
</iframe>

Než začneme s konkrétními kroky, podívejme se na kód, který budeme do administrace zadávat.

```html
<div class="carousel-slide-box">
    <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/slide1.png?v5">
    <div class="carousel-slide-caption">
        <h2>Nahradíme nadpisem banneru</h2>
        <p>Nahradíme popiskem hlavního banneru</p>
        <a href="#" class="button">Kliknutí na odkaz</a>
    </div>
</div>
```

## Administrace Shoptetu

V první řadě budeme chtít přidat kód do patřičného místa v naší Shoptet administraci. Toto místo najdeme přes hlavní nabídku administrace v kategorii VZHLED A OBSAH > Bannery > Carousel > Přidat carousel (pokud není přidaný)

<img src="https://alexborecky.com/images/shoptet/carousel-main.png">

:::warning 
Je důležité odškrtnout viditelnost všech carouselů, které jsou v nabídce.
:::

Hotovo? Výborně 👍! Jdeme dál

## Změna obrázku

Nyní začneme nahrazovat kód tím naším! Začneme od prvního, tedy od obrázku, pokračovat budeme přes nadpis, popisek až k tlačítku.

<img src="https://alexborecky.com/images/shoptet/carousel-image.png">

Podívejme se znovu na náš kód, který budeme vkládat do administrace Shoptetu.

```html
<div class="carousel-slide-box">
    <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/slide1.png?v5">
    <div class="carousel-slide-caption">
        <h2>Nahradíme nadpisem banneru</h2>
        <p>Nahradíme popiskem hlavního banneru</p>
        <a href="#" class="button">Kliknutí na odkaz</a>
    </div>
</div>
```

V první v řadě změníme obsah za textem `src` v `<img>` atributu a mezi uvozovkami, který reprezentuje obrázek, jenž je v pozadí banneru.

```
https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/slide1.png?v5
```

Tento kód je třeba nahradit adresou obrázku, který chete na místě mít. Tuto adresu získáte buď přepsáním z vašeho FTP, nebo kliknutím pravým tlačítkem na obrázek na webu a zkopírováním adresy obrázku.


## Změna nadpisu a popisku banneru

Nadpis a text se postupem nijak neliší od změny obrázku, nicméně nahrazujeme jiné atributy, a to následovně.

<img src="https://alexborecky.com/images/shoptet/carousel-text.png">

Nahrazení textu je snažší, neboť se můžeme orientovat podle již zkopírovaného textu, konkrétně `Nahradíme nadpisem banneru` a `Nahradíme popiskem hlavního banneru` v attrbitutech `<h2>` a `<p>`

```html
<h2>Nahradíme nadpisem banneru</h2>
<p>Nahradíme popiskem hlavního banneru</p>
```
Tento text můžete nahradit libovolným textem, který sedí konrétnímu banneru. Doporučujeme neprodlužovat délku nadpisu, neboť je pro uživatele přitažlivější krátký a jasný text, než dlouhé nadpisy.


## Změna odkazu a textu tlačítka
Poslední krok bude po předchozích v zásadě primitivní. Pracujeme se stejnými prvky, jako v předchozích korcích, takže se by to mělo odsýpat.

<img src="https://alexborecky.com/images/shoptet/carousel-text.png">

Podíváme se na zoubek obsahu mezi uvozovkami `href` v atribtutu `<a>` který reprezentuje link / adresu, kam bude tlačítko směřovat. V tuto chvíli máme na tomto místě pouze vyplněný hashtag `#`.

```
href="#"
```

Tento hashtag nahradíme adresou, na kterou chceme aby tlačítko banneru směřovalo. Pokud směřuje na slevu, či prodkut na vašem e-shopu, pak stačí nahradit # adresou konkrétní stranky produktu, či jiné.

Druhá část je text, který definuje text tlačítka v banneru. V našem případě je to nyní `Kliknutí na odkaz`

```html
<a href="#" class="button">Kliknutí na odkaz</a>
```

Nahradíme-li tento text jakýmkoliv, který bude příznačný pro konkrétní tlačítko, změna se nám projeví.

:::tip
TIP! Vyzkoušejte náš generátor kódu pro bannery! Stačí vyplnit obsahová pole a kód máte pžipravený pro použiti.
:::