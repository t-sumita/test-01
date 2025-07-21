// 英単語と日本語訳のリスト
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

let gameWords = []; // ゲームで使用する単語リスト（シャッフルや開始位置調整用）
let currentWordIndex = 0; // 現在の問題のインデックス
let typedCorrectly = ""; // 正しく入力された文字
let currentQuestionMistakes = 0; // 現在の問題での間違い回数
let isHintUsed = false; // 現在の問題でヒントを使ったかどうかのフラグ
let correctCount = 0; // 〇の数
let hintCount = 0; // △の数
let startTime; // ゲーム開始時間
let gameTimerInterval; // ゲーム中の時間表示のためのインターバルID
let showTimeDuringGame = true; // ゲーム中の時間表示設定

// DOM要素の取得
const gameSetup = document.getElementById('game-setup');
const gameArea = document.getElementById('game-area');
const resultScreen = document.getElementById('result-screen');
const problemListScreen = document.getElementById('problem-list-screen'); // 問題表示画面

const startQuestionInput = document.getElementById('start-question');
const randomOrderCheckbox = document.getElementById('random-order');
const questionTypeSelect = document.getElementById('question-type');
const showTimeDuringGameCheckbox = document.getElementById('show-time-during-game'); // 時間表示チェックボックス
const startGameButton = document.getElementById('start-game-button');
const viewQuestionsButton = document.getElementById('view-questions-button'); // 問題確認ボタン

const currentQuestionNumberSpan = document.getElementById('current-question-number');
const gameTimerDisplay = document.getElementById('game-timer'); // ゲーム中の時間表示要素
const timeElapsedSpan = document.getElementById('time-elapsed'); // 経過時間表示スパン
const questionDisplay = document.getElementById('question-display');
const typedWordSpan = document.getElementById('typed-word');
const hintDisplaySpan = document.getElementById('hint-display');
const answerInput = document.getElementById('answer-input');
const feedbackMessage = document.getElementById('feedback-message');
const passButton = document.getElementById('pass-button');
const endGameButton = document.getElementById('end-game-button'); // ゲーム終了ボタン

const correctCountSpan = document.getElementById('correct-count');
const hintCountSpan = document.getElementById('hint-count');
const timeTakenSpan = document.getElementById('time-taken');
const backToSetupButton = document.getElementById('back-to-setup-button'); // 結果画面から最初の画面へボタン

const questionListContainer = document.getElementById('question-list-container'); // 問題リスト表示エリア
const startGameFromListTopButton = document.getElementById('start-game-from-list-top'); // 問題リスト上部のゲームスタートボタン
const backToSetupFromListTopButton = document.getElementById('back-to-setup-from-list-top'); // 問題リスト上部の最初の画面へボタン
const startGameFromListBottomButton = document.getElementById('start-game-from-list-bottom'); // 問題リスト下部のゲームスタートボタン
const backToSetupFromListBottomButton = document.getElementById('back-to-setup-from-list-bottom'); // 問題リスト下部の最初の画面へボタン


// ゲームの初期化処理
initializeGame();

function initializeGame() {
    // 画面の表示を初期状態に戻す
    gameSetup.style.display = 'block';
    gameArea.style.display = 'none';
    resultScreen.style.display = 'none';
    problemListScreen.style.display = 'none'; // 問題表示画面も非表示に

    // スコアや状態をリセット
    correctCount = 0;
    hintCount = 0;
    typedCorrectly = "";
    currentQuestionMistakes = 0;
    isHintUsed = false;
    answerInput.value = "";
    feedbackMessage.textContent = "";
    typedWordSpan.textContent = "";
    hintDisplaySpan.textContent = "";

    // タイマーをクリア
    if (gameTimerInterval) {
        clearInterval(gameTimerInterval);
    }
    gameTimerDisplay.style.display = 'none'; // 時間表示を非表示に

    // 発音機能の準備
    // ブラウザがSpeech Synthesis APIをサポートしているか確認
    if ('speechSynthesis' in window) {
        // サポートされている場合、特に何もしない
    } else {
        // サポートされていない場合、発音オプションを無効にする
        questionTypeSelect.querySelector('option[value="pronunciation"]').disabled = true;
        console.warn("Speech Synthesis API not supported in this browser.");
    }
}

// イベントリスナーの設定
startGameButton.addEventListener('click', startGame);
backToSetupButton.addEventListener('click', initializeGame); // 結果画面から「最初の画面へ」ボタン
passButton.addEventListener('click', passQuestion);
endGameButton.addEventListener('click', endGame); // ゲーム終了ボタンのイベントリスナー
answerInput.addEventListener('input', handleTyping);
viewQuestionsButton.addEventListener('click', displayAllQuestions); // 問題確認ボタンのイベントリスナー

// 問題リスト画面のボタンにもイベントリスナーを設定
startGameFromListTopButton.addEventListener('click', startGame);
backToSetupFromListTopButton.addEventListener('click', initializeGame);
startGameFromListBottomButton.addEventListener('click', startGame);
backToSetupFromListBottomButton.addEventListener('click', initializeGame);


/**
 * ゲームを開始する関数
 */
function startGame() {
    // ユーザーが設定した開始問題番号を取得 (1-indexedなので-1する)
    const startIndex = parseInt(startQuestionInput.value) - 1;
    // ランダム順序が選択されているか確認
    const isRandom = randomOrderCheckbox.checked;
    // ゲーム中の時間表示設定を取得
    showTimeDuringGame = showTimeDuringGameCheckbox.checked;

    // 元の単語リストをコピーしてゲーム用リストを作成
    gameWords = [...words];

    // ランダム順序が選択されていればシャッフル
    if (isRandom) {
        shuffleArray(gameWords);
    }

    // 指定された開始位置から問題を並べ替える
    // 例: startIndexが5の場合、0-4番目の単語をリストの最後に移動させる
    const partBeforeStart = gameWords.slice(0, startIndex);
    const partFromStart = gameWords.slice(startIndex);
    gameWords = partFromStart.concat(partBeforeStart);

    currentWordIndex = 0; // 問題インデックスをリセット
    startTime = new Date(); // ゲーム開始時間を記録

    // ゲーム中の時間表示を制御
    if (showTimeDuringGame) {
        gameTimerDisplay.style.display = 'block';
        // 1秒ごとに時間を更新
        gameTimerInterval = setInterval(updateGameTimer, 1000);
    } else {
        gameTimerDisplay.style.display = 'none';
    }


    // 画面表示をゲームプレイ画面に切り替える
    gameSetup.style.display = 'none';
    problemListScreen.style.display = 'none'; // 問題リスト画面も非表示に
    resultScreen.style.display = 'none'; // 結果画面も非表示に
    gameArea.style.display = 'block';
    answerInput.focus(); // 入力フィールドにフォーカスを当てる

    loadQuestion(); // 最初の問題をロード
}

/**
 * ゲーム中のタイマーを更新する関数
 */
function updateGameTimer() {
    const currentTime = new Date();
    const timeDiff = currentTime - startTime; // ミリ秒単位
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timeElapsedSpan.textContent = `${minutes}分 ${remainingSeconds}秒`;
}

/**
 * 配列をシャッフルする関数 (Fisher-Yatesアルゴリズム)
 * @param {Array} array - シャッフルする配列
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * 次の問題をロードする関数
 */
function loadQuestion() {
    // 全ての問題を終えたらゲーム終了
    if (currentWordIndex >= words.length) {
        endGame();
        return;
    }

    const currentWord = gameWords[currentWordIndex]; // 現在の単語オブジェクト
    currentQuestionNumberSpan.textContent = currentWordIndex + 1; // 問題番号を更新
    typedCorrectly = ""; // 正しく入力された文字をリセット
    currentQuestionMistakes = 0; // 現在の問題での間違い回数をリセット
    isHintUsed = false; // ヒント使用フラグをリセット
    answerInput.value = ""; // 入力フィールドをクリア
    feedbackMessage.textContent = ""; // フィードバックメッセージをクリア
    typedWordSpan.textContent = ""; // 正しく入力された部分をクリア
    hintDisplaySpan.textContent = generateUnderscores(currentWord.en.length); // 全ての文字をアンダースコアで表示

    // 出題方法によって表示を切り替える
    if (questionTypeSelect.value === 'japanese') {
        questionDisplay.textContent = currentWord.ja; // 日本語訳を表示
    } else {
        questionDisplay.textContent = "(発音を聞いてね)"; // 発音を促すメッセージ
        speakWord(currentWord.en); // 英単語を発音
    }
}

/**
 * 指定された長さのアンダースコア文字列を生成する関数
 * @param {number} length - 生成するアンダースコアの長さ
 * @returns {string} アンダースコア文字列
 */
function generateUnderscores(length) {
    return '_'.repeat(length);
}

/**
 * 英単語を発音する関数
 * @param {string} word - 発音する英単語
 */
function speakWord(word) {
    if ('speechSynthesis' in window) {
        // 現在発音中のものがあれば停止
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US'; // 英語に設定
        speechSynthesis.speak(utterance);
    }
}

/**
 * ユーザーのタイピングを処理する関数
 * @param {Event} event - inputイベントオブジェクト
 */
function handleTyping(event) {
    const inputChar = event.data; // 入力された文字
    const currentWord = gameWords[currentWordIndex].en; // 現在の正解単語

    // バックスペースなど、文字が削除された場合は何もしない
    if (inputChar === null) {
        return;
    }

    // 入力は小文字に変換して比較する（大文字小文字を区別しないため）
    const expectedChar = currentWord[typedCorrectly.length];
    const isCorrect = (inputChar.toLowerCase() === expectedChar.toLowerCase());

    if (isCorrect) {
        // 正しい文字が入力された場合
        typedCorrectly += inputChar.toLowerCase(); // 正しい入力に追加
        answerInput.value = ""; // 入力フィールドをクリア
        typedWordSpan.textContent = typedCorrectly; // 正しく入力された部分を更新
        // 残りの文字をアンダースコアで表示
        hintDisplaySpan.textContent = generateUnderscores(currentWord.length - typedCorrectly.length);
        feedbackMessage.textContent = ""; // フィードバックメッセージをクリア
        currentQuestionMistakes = 0; // 正解したので間違いカウントをリセット
    } else {
        // 間違った文字が入力された場合
        currentQuestionMistakes++; // 間違い回数をインクリメント
        feedbackMessage.textContent = `「${inputChar}」は違います。`; // フィードバックメッセージを表示
        answerInput.value = ""; // 入力フィールドをクリア

        if (currentQuestionMistakes === 1) {
            // 1回目の間違いの場合、単語全体のアンダースコアを表示
            hintDisplaySpan.textContent = generateUnderscores(currentWord.length - typedCorrectly.length);
        } else if (currentQuestionMistakes >= 2) {
            // 2回目以降の間違いの場合、ヒントを表示
            isHintUsed = true; // ヒント使用フラグを立てる
            displayHint(currentWord, typedCorrectly.length);
        }
    }

    // 全ての文字を正しく入力し終えたかチェック
    if (typedCorrectly.length === currentWord.length) {
        // スコアを更新
        if (!isHintUsed) {
            correctCount++; // ヒントを使っていなければ〇
        } else {
            hintCount++; // ヒントを使っていれば△
        }
        // 少し待ってから次の問題へ
        setTimeout(() => {
            currentWordIndex++;
            loadQuestion();
        }, 500);
    }
}

/**
 * ヒントを表示する関数
 * @param {string} word - 正解の単語
 * @param {number} currentTypedLength - 現在正しく入力されている文字数
 */
function displayHint(word, currentTypedLength) {
    let hintText = '';
    const remainingLength = word.length - currentTypedLength; // 残りの文字数
    const hintLength = Math.min(5, remainingLength); // 最大5文字分のヒント

    // ヒントとして表示する文字を生成
    for (let i = 0; i < hintLength; i++) {
        hintText += word[currentTypedLength + i];
    }
    typedWordSpan.textContent = typedCorrectly; // 正しく入力された部分を再表示
    // ヒントの文字と、残りのアンダースコアを表示
    hintDisplaySpan.textContent = hintText + generateUnderscores(remainingLength - hintLength);
}

/**
 * 問題をパスする関数
 */
function passQuestion() {
    hintCount++; // パスもヒント使用としてカウントする
    const currentWord = gameWords[currentWordIndex].en;
    typedWordSpan.textContent = currentWord; // 正しい答えを表示
    hintDisplaySpan.textContent = ""; // ヒント表示をクリア
    feedbackMessage.textContent = `正解は「${currentWord}」でした！`;

    // 少し待ってから次の問題へ
    setTimeout(() => {
        currentWordIndex++; // 次の問題へ
        loadQuestion();
    }, 1500); // 答えを表示する時間を少し長くする
}

/**
 * ゲームを終了し、結果画面を表示する関数
 */
function endGame() {
    // タイマーを停止
    if (gameTimerInterval) {
        clearInterval(gameTimerInterval);
    }

    const endTime = new Date();
    const timeDiff = endTime - startTime; // 経過時間 (ミリ秒)
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // 結果を表示
    correctCountSpan.textContent = correctCount;
    hintCountSpan.textContent = hintCount;
    timeTakenSpan.textContent = `${minutes}分 ${remainingSeconds}秒`;

    // 画面表示を結果画面に切り替える
    gameArea.style.display = 'none';
    resultScreen.style.display = 'block';
}

/**
 * 全問題リストを表示する関数
 */
function displayAllQuestions() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // ヘッダー行を作成
    const headerRow = document.createElement('tr');
    const thNumber = document.createElement('th');
    thNumber.textContent = 'No.';
    const thEnglish = document.createElement('th');
    thEnglish.textContent = '英単語';
    const thJapanese = document.createElement('th');
    thJapanese.textContent = '日本語';
    headerRow.appendChild(thNumber);
    headerRow.appendChild(thEnglish);
    headerRow.appendChild(thJapanese);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 各問題をテーブルに追加
    words.forEach((word, index) => {
        const row = document.createElement('tr');
        const tdNumber = document.createElement('td');
        tdNumber.textContent = index + 1;
        const tdEnglish = document.createElement('td');
        tdEnglish.textContent = word.en;
        const tdJapanese = document.createElement('td');
        tdJapanese.textContent = word.ja;

        row.appendChild(tdNumber);
        row.appendChild(tdEnglish);
        row.appendChild(tdJapanese);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // 既存のリストをクリアして新しいテーブルを挿入
    questionListContainer.innerHTML = '';
    questionListContainer.appendChild(table);

    // 画面表示を問題リスト画面に切り替える
    gameSetup.style.display = 'none';
    gameArea.style.display = 'none';
    resultScreen.style.display = 'none';
    problemListScreen.style.display = 'block';
}


// キーボードイベントリスナー (主にanswer-inputにフォーカスを維持するため)
document.addEventListener('keydown', (e) => {
    // ゲームエリアが表示されているときのみキー入力を処理
    if (gameArea.style.display === 'block') {
        // スペースキーが入力された場合、デフォルトのスクロールなどを防ぐ
        if (e.key === ' ') {
            e.preventDefault();
        }
        // answer-inputに常にフォーカスを当てる
        answerInput.focus();
    }
});
