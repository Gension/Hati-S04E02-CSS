# Jour 2 : CSS 

3 pilliers du dev Front 
- HTML : La maçonnerie
- CSS : La déco
- JS : L'eau courante et l'electricité

## CSS 

CSS = Cascading Style Sheets. C'est un langage qui est utilisé pour décrire la présentation d'un document rédigé en HTML.

Le selecteur "." permet de viser les elements HTML avec l'attribut class
Le selecteur "#" permet de viser **UN** élement HTML avec l'attribut id qui doit être unique
En l'absence de selecteur on vise la base. Par exemple `div { color: red; }` permet de viser tous les div d'un document.

Il est possible de viser un élement en fonction de ses parents.
```css
article .experience {
    color: red
}
```

Permet de viser tous les elements avec la classe experience qui sont enfant d'un element article.
Si on utilise le `>` il doit être l'enfant direct dans la hierarchie exemple : `article > .experience`

## Flexbox 

Qui permet d'agencer de manière flexible les elements d'une page 

// TODO

## Grid 

## Responsive 

Favoriser les unités relatives : 
- % : Relatif a l'élement parent
- em: Relatif à la taille de la police
- rem Relatif à taille de l'element racine
- vw/vh : Relative à la largeur et hauteur de mon "viewport" : C'est la zone qui est visible sur une page web