import { NextResponse } from "next/server";
import * as tf from '@tensorflow/tfjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const answers = body.answers;

    // Validate input length
    if (!Array.isArray(answers) || answers.length !== 37) {
      return NextResponse.json({ error: 'Input should be an array of length 37' }, { status: 400 });
    }

    // Load the model
    const model = await tf.loadLayersModel("http://localhost:3000/model_tfjs/model.json");

    // Prepare input tensor
    const inputData = tf.tensor2d([answers], [1, 37]); // Wrap answers in an array

    // Make prediction
    const output = model.predict(inputData) as tf.Tensor;

    // Process output
    const predictionArray = output.dataSync();
    const predictedClass = tf.argMax(predictionArray).dataSync()[0];

    return NextResponse.json({ predictedClass }, { status: 200 });
  } catch (error) {
    console.error("Error during prediction:", error);
    return NextResponse.json({error }, { status: 500 });
  }
}

