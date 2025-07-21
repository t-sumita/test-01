const words = [
    { en: "breakfast", ja: "朝食" },
    { en: "lunch", ja: "昼食" },
    { en: "dinner", ja: "夕食" },
    { en: "sports", ja: "スポーツ" },
    { en: "marathon", ja: "マラソン" },
    { en: "soccer", ja: "サッカー" },
    { en: "baseball", ja: "野球" },
    { en: "basketball", ja: "バスケットボール" },
    { en: "tennis", ja: "テニス" },
    { en: "volleyball", ja: "バレーボール" },
    { en: "table tennis", ja: "卓球" },
    { en: "swimming", ja: "水泳" },
    { en: "judo", ja: "柔道" },
    { en: "sumo", ja: "相撲" },
    { en: "kendo", ja: "剣道" },
    { en: "studies", ja: "勉強" },
    { en: "math", ja: "数学" },
    { en: "science", ja: "科学" },
    { en: "English", ja: "英語" },
    { en: "Japanese", ja: "国語" },
    { en: "social studies", ja: "社会" },
    { en: "history", ja: "歴史" },
    { en: "geography", ja: "地理" },
    { en: "art", ja: "美術" },
    { en: "music", ja: "音楽" },
    { en: "P.E.", ja: "体育" },
    { en: "home economics", ja: "家庭科" },
    { en: "technology", ja: "技術" },
    { en: "computer", ja: "コンピュータ" },
    { en: "club activities", ja: "部活動" },
    { en: "homework", ja: "宿題" },
    { en: "test", ja: "テスト" },
    { en: "exam", ja: "試験" },
    { en: "report", ja: "レポート" },
    { en: "presentation", ja: "発表" },
    { en: "speech", ja: "スピーチ" },
    { en: "debate", ja: "討論" },
    { en: "discussion", ja: "議論" },
    { en: "question", ja: "質問" },
    { en: "answer", ja: "答え" },
    { en: "correct", ja: "正しい" },
    { en: "wrong", ja: "間違い" },
    { en: "good", ja: "良い" },
    { en: "bad", ja: "悪い" },
    { en: "easy", ja: "簡単" },
    { en: "difficult", ja: "難しい" },
    { en: "interesting", ja: "面白い" },
    { en: "boring", ja: "退屈な" },
    { en: "important", ja: "重要な" },
    { en: "necessary", ja: "必要な" },
    { en: "useful", ja: "役に立つ" },
    { en: "useless", ja: "役に立たない" },
    { en: "happy", ja: "幸せ" },
    { en: "sad", ja: "悲しい" },
    { en: "angry", ja: "怒っている" },
    { en: "surprised", ja: "驚いた" },
    { en: "tired", ja: "疲れた" },
    { en: "sleepy", ja: "眠い" },
    { en: "hungry", ja: "お腹が空いた" },
    { en: "thirsty", ja: "喉が渇いた" },
    { en: "busy", ja: "忙しい" },
    { en: "free", ja: "暇な" },
    { en: "beautiful", ja: "美しい" },
    { en: "pretty", ja: "かわいい" },
    { en: "cute", ja: "可愛い" },
    { en: "handsome", ja: "ハンサム" },
    { en: "ugly", ja: "醜い" },
    { en: "tall", ja: "背が高い" },
    { en: "short", ja: "背が低い" },
    { en: "big", ja: "大きい" },
    { en: "small", ja: "小さい" },
    { en: "long", ja: "長い" },
    { en: "short", ja: "短い" },
    { en: "fast", ja: "速い" },
    { en: "slow", ja: "遅い" },
    { en: "early", ja: "早い" },
    { en: "late", ja: "遅い" },
    { en: "every day", ja: "毎日" },
    { en: "sometimes", ja: "時々" },
    { en: "often", ja: "よく" },
    { en: "always", ja: "いつも" },
    { en: "usually", ja: "普段" },
    { en: "never", ja: "決して" },
    { en: "once", ja: "一度" },
    { en: "twice", ja: "二度" },
    { en: "three times", ja: "三度" },
    { en: "many times", ja: "何度も" },
    { en: "shopping", ja: "買い物" },
    { en: "playing video games", ja: "ゲームをする" },
    { en: "watching TV", ja: "テレビを見る" },
    { en: "reading", ja: "読書" },
    { en: "listening to music", ja: "音楽を聴く" },
    { en: "going to the movies", ja: "映画を見に行く" },
    { en: "going to the park", ja: "公園に行く" },
    { en: "going to the beach", ja: "海に行く" },
    { en: "traveling", ja: "旅行する" },
    { en: "visiting relatives", ja: "親戚を訪ねる" },
    { en: "doing homework", ja: "宿題をする" },
    { en: "studying", ja: "勉強する" },
    { en: "relaxing", ja: "リラックスする" }
];

let gameWords = [];
let currentWordIndex = 0;
let typedCorrectly = "";
let mistakes = 0;
let currentQuestionMistakes = 0; // 各問題での間違い回数
let isHintUsed = false;
let correctCount = 0;
let hintCount = 0;
let startTime;
let speechSynthesis; // SpeechSynthesisUtterance object

// DOM要素の取得
const gameSetup = document.getElementById('game-setup');
const gameArea = document.getElementById('game-area');
const resultScreen = document.getElementById('result-screen');

const startQuestionInput = document.getElementById('start-question');
const randomOrderCheckbox = document.getElementById('random-order');
const questionTypeSelect = document.getElementById('question-type');
const startGameButton = document.getElementById('start-game-button');

const currentQuestionNumberSpan = document.getElementById('current-question-number');
const questionDisplay = document.getElementById('question-display');
const typedWordSpan = document.getElementById('typed-word');
const hintDisplaySpan = document.getElementById('hint-display');
const answerInput = document.getElementById('answer-input');
const feedbackMessage = document.getElementById('feedback-message');
const passButton = document.getElementById('pass-button');

const correctCountSpan = document.getElementById('correct-count');
const hintCountSpan = document.getElementById('hint-count');
const timeTakenSpan = document.getElementById('time-taken');
const restartButton = document.getElementById('restart-button');

// 初期設定
initializeGame();

function initializeGame() {
    gameSetup.style.display = 'block';
    gameArea.style.display = 'none';
    resultScreen.style.display = 'none';

    correctCount = 0;
    hintCount = 0;
    typedCorrectly = "";
    mistakes = 0;
    currentQuestionMistakes = 0;
    isHintUsed = false;
    answerInput.value = "";
    feedbackMessage.textContent = "";
    typedWordSpan.textContent = "";
    hintDisplaySpan.textContent = "";

    // 発音機能の準備
    if ('speechSynthesis' in window) {
        speechSynthesis = window.speechSynthesis;
    } else {
        questionTypeSelect.querySelector('option[value="pronunciation"]').disabled = true;
        console.warn("Speech Synthesis API not supported in this browser.");
    }
}

startGameButton.addEventListener('click', startGame);
restartButton.addEventListener('click', initializeGame);
passButton.addEventListener('click', passQuestion);
answerInput.addEventListener('input', handleTyping);

function startGame() {
    const startIndex = parseInt(startQuestionInput.value) - 1;
    const isRandom = randomOrderCheckbox.checked;

    gameWords = [...words]; // 元の配列をコピー

    if (isRandom) {
        shuffleArray(gameWords);
    }

    // 指定された開始位置から問題を並べ替え
    const partBeforeStart = gameWords.slice(0, startIndex);
    const partFromStart = gameWords.slice(startIndex);
    gameWords = partFromStart.concat(partBeforeStart);

    currentWordIndex = 0;
    startTime = new Date(); // ゲーム開始時間を記録

    gameSetup.style.display = 'none';
    gameArea.style.display = 'block';
    answerInput.focus();

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    if (currentWordIndex >= words.length) {
        endGame();
        return;
    }

    const currentWord = gameWords[currentWordIndex];
    currentQuestionNumberSpan.textContent = currentWordIndex + 1;
    typedCorrectly = "";
    currentQuestionMistakes = 0;
    isHintUsed = false;
    answerInput.value = "";
    feedbackMessage.textContent = "";
    typedWordSpan.textContent = "";
    hintDisplaySpan.textContent = generateUnderscores(currentWord.en.length); // 最初のアンダースコア表示

    if (questionTypeSelect.value === 'japanese') {
        questionDisplay.textContent = currentWord.ja;
    } else {
        questionDisplay.textContent = "(発音を聞いてね)";
        speakWord(currentWord.en);
    }
}

function generateUnderscores(length) {
    return '_'.repeat(length);
}

function speakWord(word) {
    if (speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // 英語に設定
        speechSynthesis.speak(utterance);
    }
}

function handleTyping(event) {
    const inputChar = event.data; // 入力された文字
    const currentWord = gameWords[currentWordIndex].en;

    if (inputChar === null) { // バックスペースなどによる削除の場合
        // 入力文字がない場合は何もしない
        return;
    }

    // 入力は小文字に変換して比較
    const expectedChar = currentWord[typedCorrectly.length];
    const isCorrect = (inputChar.toLowerCase() === expectedChar.toLowerCase());

    if (isCorrect) {
        typedCorrectly += inputChar.toLowerCase();
        answerInput.value = ""; // 入力フィールドをクリア
        typedWordSpan.textContent = typedCorrectly;
        hintDisplaySpan.textContent = generateUnderscores(currentWord.length - typedCorrectly.length);
        feedbackMessage.textContent = "";
        currentQuestionMistakes = 0; // 正解したので間違いカウントをリセット
    } else {
        currentQuestionMistakes++;
        feedbackMessage.textContent = `「${inputChar}」は違います。`;
        answerInput.value = ""; // 入力フィールドをクリア

        if (currentQuestionMistakes >= 2) {
            // 2回間違えたらヒント表示
            isHintUsed = true;
            displayHint(currentWord, typedCorrectly.length);
        }
    }

    // 全て入力し終えたかチェック
    if (typedCorrectly.length === currentWord.length) {
        if (!isHintUsed) {
            correctCount++;
        } else {
            hintCount++;
        }
        setTimeout(() => {
            currentWordIndex++;
            loadQuestion();
        }, 500); // 少し待って次の問題へ
    }
}

function displayHint(word, currentTypedLength) {
    let hintText = '';
    const remainingLength = word.length - currentTypedLength;
    const hintLength = Math.min(5, remainingLength); // 最大5文字分のヒント

    for (let i = 0; i < hintLength; i++) {
        hintText += word[currentTypedLength + i];
    }
    typedWordSpan.textContent = typedCorrectly;
    hintDisplaySpan.textContent = hintText + generateUnderscores(remainingLength - hintLength);
}


function passQuestion() {
    hintCount++; // パスもヒント使用としてカウント
    currentWordIndex++;
    loadQuestion();
}

function endGame() {
    const endTime = new Date();
    const timeDiff = endTime - startTime; // ミリ秒単位
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    correctCountSpan.textContent = correctCount;
    hintCountSpan.textContent = hintCount;
    timeTakenSpan.textContent = `${minutes}分 ${remainingSeconds}秒`;

    gameArea.style.display = 'none';
    resultScreen.style.display = 'block';
}

// キーボードイベントリスナー
document.addEventListener('keydown', (e) => {
    // ゲームエリアが表示されているときのみキー入力を処理
    if (gameArea.style.display === 'block') {
        // スペースキーが入力された場合、デフォルトのスクロールなどを防ぐ
        if (e.key === ' ') {
            e.preventDefault();
        }
    }
});