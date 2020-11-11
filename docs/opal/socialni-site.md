# Ikony sociálních sítí

V této sekci vám poradíme, jak nastavit směrování ikon sociálních síti v patičce šablony Opal. Prakticky jde o jednoduchou změnu kódu, kterou vás provedeme v návodu níže.

## Administrace Shoptetu
Nejdříve se podíváme do sekce administrace Shoptetu, se kterou budeme pracovat. Tu najdeme následovně:

<Boxes-TextBox 
    :msg="msg"
/>

## Přidání prvku do patičky
V této sekci se ujistíme, že prvek "Kontakt" je zařazený mezi ostatní prvky v patičce administrace. Pokud není, jednoduchým přetažením ze spodní sekce do patičky jej přidáme.

<img src="https://alexborecky.com/images/shoptet/contact.png">

:::danger
Tento prvek musí být zařazený mezi ostatní v patičce, aby se ikony sociálních sítí zobrazovaly.
:::

## Úprava URL adres

Řada našich ikonek je připravena pro všechna nastavení Shoptetu, proto můžete editovat a zobrazovat všechny vyznačené sekce (viz. obrázek níže).

<img src="https://alexborecky.com/images/shoptet/social-media.png">

Vyplněním těchto políček a zaškrnutím viditelnosti v kategorii "Kontakt" se políčka automaticky zviditelní v patičce šablony. Ujistěte se také, že odkazy jsou ve formátu podobný příkladu níže.
<Boxes-TextBox 
    msg="https://instagram.com/shoptet.cz"
/>

<img src="https://alexborecky.com/images/shoptet/social-footer.png">

:::warning
Doporučujeme zanechat vizuální styl ikonek. Důvodem je jasná viditelnost v patičce šablony.
:::


<script>
export default {
    data () {
        return {
            msg: 'Administrace > VZHLED A OBSAH > Šablony > Prvky'
        }
    }
}
</script>