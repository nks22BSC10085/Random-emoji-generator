let GererateEmoji = document.querySelector(".emoji");
let GererateEmojis = document.querySelector(".GenEmoji");
let emoji = Array('👍', '👎', '🩹', '🧑', '🚡', '✈️', '⏰', '⚗️', '👽', '🚑', '🏺', '🫀', '⚓', '👼', '💢', '😠', '😧', '🐜', '🍎', '🐎', '🎨', '🚛', '🛰️', '🧑‍🎨', '🛺', '🧑‍🚀', '🌍', '*️⃣', '😲', '👟', '🏧', '🥑', '🏹', ' 👨‍🎨', '👩‍🎨', '🌏', '📊', '🎠', '🎈', ' 🎇', '👶', '🍼', '🐤', '🚼', '🔙', '🦡', '🏸', '🥯', '🥖', '👨‍🦲', '⚖️', '👩‍🦲', '🩰', '🗳️', '🎍', '🍌', '🪕', '🏦', '🦫', '🐻', '⚾', '⛹️‍♂️', '⛹️‍♀️', '🦇', '🛀', '🛁', '🔋', '🪲', '🛏️', '🐝', '🍺', '🍻', '👰‍♀️', '🚴‍♂️', '💔', '🚄', '🐦', '🦬', '🐈‍⬛', '🐡', '🎂', '🫦', '👰‍♀️', '🌵', '🍰', '📷', '📸', '🏕️', '🕯️', '🐫', '🥫', '🍬', '🚗', '🤸', '🐈', '🐱', '🪑', '🍾', '🧀', '📆', '🤙', '🤡', '⏰', '🍫', '🤭', '😞', '😵', '🥸', '😥', '🫥', '🤤', '👶', '😲', '👨‍🦲', '👽', '😧', '👰‍♀️', '😠', '👩‍🦲');
let yourEmoji = Math.floor(Math.random() * 120);
let randomEmoji = () => {
    GererateEmoji.innerText = emoji[yourEmoji];
    yourEmoji = Math.floor(Math.random() * 120);
}
GererateEmoji.addEventListener('click', randomEmoji);
GererateEmojis.addEventListener('click', randomEmoji);
