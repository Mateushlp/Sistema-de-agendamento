// Importação da biblioteca TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Definição do modelo de inteligência artificial
const model = tf.sequential();

// Adição da primeira camada do modelo
model.add(tf.layers.dense({
    inputShape: [8],
    units: 128,
    activation: 'relu'
}));

// Adição da segunda camada do modelo
model.add(tf.layers.dense({
    units: 64,
    activation: 'relu'
}));

// Adição da camada de saída do modelo
model.add(tf.layers.dense({
    units: 1
}));

// Compilação do modelo
model.compile({
    loss: 'meanSquaredError',
    optimizer: tf.train.adam(0.1)
});

// Treinamento do modelo
const inputTensor = tf.tensor2d([[1, 2, 3, 4, 5, 6, 7, 8]]);
const outputTensor = tf.tensor2d([[10]]);
model.fit(inputTensor, outputTensor, { epochs: 1000 }).then(() => {
    // Definição dos dados de saída do sistema
    const outputData = [];

    // Definição das ordens de serviço
    for (let i = 0; i < 10; i++) {
        // Seleção dos dados de entrada para a ordem de serviço
        const inputDataOs = tf.tensor2d([[1, 2, 3, 4, 5, 6, 7, 8]]);

        // Previsão do tempo de conclusão da ordem de serviço
        const predictedCompletionTime = model.predict(inputDataOs).dataSync()[0];

        // Adição da ordem de serviço ao conjunto de dados de saída
        outputData.push({
            order_id: i,
            start_time: Date.now(),
            completion_time: Date.now() + (predictedCompletionTime * 60000) // conversão de minutos para milissegundos
        });
    }

    // Salvar os dados de saída em um arquivo JSON
    const fs = require('fs');
    fs.writeFileSync('output_data.json', JSON.stringify(outputData));
});
