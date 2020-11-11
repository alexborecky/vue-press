# Množství zboží
Součástí šablony Opal je i doplněk pro nastavení libovolného množství, které můžete do košíku přidat. V této sekci vás provedeme nastavením tohoto doplňku.

<img src="https://alexborecky.com/images/shoptet/amount.png">

:::warning
Tento prvek je nastavený jako výchozí pro každou šablonu. Následující kroky popusují jeho vypnutí!
:::

## Administrace Shoptetu
Nejdříve se podíváme do sekce administrace Shoptetu, se kterou budeme pracovat. Tu najdeme následovně:

<Boxes-TextBox 
    :msg="msg"
/>

## Odebrání prvku
Doplněk množství je automaticky zapnutý pro každou šablonu. Pro jeho deaktivaci vložte kód níže do sekce Záhlaví (před koncovým tagem HEAD).

```html
<style>
.type-detail .product-top .add-to-cart .quantity {
    display: none;
}
</style>
```


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Šablony > Prvky'
        }
    }
}
</script>