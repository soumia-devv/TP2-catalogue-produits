
const produits = [   
    { id: 1, nom: "Clavier", categorie: "Accessoires", prix: 120, stock: 5 },
    { id: 2, nom: "Souris", categorie: "Accessoires", prix: 80, stock: 8 },
    { id: 3, nom: "Écran", categorie: "Informatique", prix: 900, stock: 0 },
    { id: 4, nom: "Casque", categorie: "Accessoires", prix: 240, stock: 3 }];
console.log("=== Catalogue des produits ===");

for (const produit of produits) {
    console.log(produit.nom, "-", produit.prix, "MAD");
}
const disponibles = produits.filter(
    (produit) => produit.stock > 0
);

console.log("\n=== Produits disponibles ===");
console.log(disponibles);
console.log("Nombre de produits disponibles :", disponibles.length);
const valeurStock = produits.reduce(
    (total, produit) => total + produit.prix * produit.stock,
    0
);

console.log("\nValeur totale du stock :", valeurStock, "MAD");
let moinsCher = null;

for (const produit of disponibles) {
    if (moinsCher === null || produit.prix < moinsCher.prix) {
        moinsCher = produit;
    }
}

console.log("\n=== Produit disponible le moins cher ===");

if (moinsCher !== null) {
    console.log(moinsCher.nom, "-", moinsCher.prix, "MAD");
} else {
    console.log("Aucun produit disponible.");
}
const resume = produits.map(
    (produit) =>
        `${produit.nom} - ${produit.prix} MAD - ${produit.stock} unités`
);

console.log("\n=== Résumé du catalogue ===");

for (const ligne of resume) {
    console.log(ligne);
}
function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           produit.prix >= 0 &&
           Number.isFinite(produit.stock) &&
           produit.stock >= 0;
}

console.log(
    "\n=== Vérification des données ==="
);

console.log(
    "Tous les produits sont valides :",
    produits.every(estValide)
);
