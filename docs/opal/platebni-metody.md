# Ikony platebních metod

Potřebujete přidat ikony platebních metod do své patičky? Postup je velmi snadný a v této sekci Vám poradíme, jak na to!

<img src="https://alexborecky.com/images/shoptet/logos.png">

## Administrace Shoptetu

Nejdříve se podíváme do sekce administrace Shoptetu, se kterou budeme pracovat. Tu najdeme následovně:

<Boxes-TextBox 
    :msg="msg"
/>

## Přidání prvku do patičky

V této sekci se ujistíme, že prvek "Loga online plateb" je zařazený mezi ostatní prvky v patičce administrace. Pokud není, jednoduchým přetažením ze spodní sekce do patičky jej přidáme.

<img src="https://alexborecky.com/images/shoptet/logos-image.png">

## Přidání kódu

Dostali jsme se do sekce, ve které můžeme upravit obsah pomocí kódu. V případě, že se vám líbí ikonky použité v ukázkové šabloně, přidejte kód uvedený níže. Pokud byste chtěli přidat ikony jiné, stačí nahradit obsah URL odkazem vámi zvoleného obrázku, a to mezi uvozovkami za atribuem `src=`.

```html
<div class="online-platby">
    <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/visa.svg">
    <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/mastercard.svg">
    <img src="https://cdn.myshoptet.com/usr/shoptet.tomashlad.eu/user/documents/extras/opal/img/payments/paypal.svg">
</div>
```

## Kontrola nastavení

Nyní se stačí ujistit, že nastení odpovídá tomu, které je uvedené na obrázku níže. Po uložení se ikony zobrací v patičce vaší šablony.

<img src="https://alexborecky.com/images/shoptet/logos-settings.png">

<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Šablony > Prvky'
        }
    }
}
</script>