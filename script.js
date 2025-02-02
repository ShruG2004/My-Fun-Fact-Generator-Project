const facts = [
    "This person enjoys playing badminton and participates in local tournaments.",
    "They host badminton matches with friends at home during weekends.",
    "They experiment with new cooking techniques like sous-vide and molecular gastronomy.",
    "Their kitchen is filled with spices and ingredients from around the world.",
    "They volunteer at shelters, using cooking skills to help those in need.",
    "They utilize innovative kitchen gadgets for cooking.",
    "They practice mindfulness techniques such as meditation or yoga at home.",
    "They enjoy exploring nature trails and parks, often playing badminton outdoors.",
    "They develop and share original recipes inspired by food trends and seasonal ingredients.",
    "They continuously seek new skills through classes and workshops."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').innerText = facts[randomIndex];
});
