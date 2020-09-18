let MODEL

self.addEventListener("message", function onMessage(msg) {
  const { cmd, payload } = msg.data
  if (cmd === "loadModels") {
    return loadModels(payload)
  }
  if (cmd === "engineDetect") {
    return engineDetect(payload)
  }
  if (cmd === "terminate") {
    return terminate(payload)
  }
})

async function loadModels(payload) {
  const { wasmPath, modelPath, importPaths, inputWidth, inputHeight, scoreThreshold, iouThreshold, maxFaces } = payload
  try {
    importScripts(...importPaths)
  } catch (error) {
    postMessage({
      exec: "error",
      payload: error.message,
    })
    throw error
  }
  const start = performance.now()
  postMessage({
    exec: "log",
    payload: "Loading models",
  })
  tf.wasm.setWasmPath(wasmPath)
  await tf.setBackend("wasm")
  try {
    const bfModel = await tf.loadGraphModel(modelPath, { fromTFHub: true })
    MODEL = new blazeface.BlazeFaceModel(bfModel, inputWidth, inputHeight, maxFaces, iouThreshold, scoreThreshold)
  } catch (error) {
    postMessage({
      exec: "error",
      payload: error,
    })
    throw error
  }
  postMessage({
    exec: "log",
    payload: `Models loaded in ${Math.round(performance.now() - start)}ms`,
  })
  postMessage({
    exec: "loadModels",
    payload: {},
  })
}

async function engineDetect(payload) {
  const { buffer, width, height, channels } = payload
  const imageData = new ImageData(new Uint8ClampedArray(buffer), width, height)
  try {
    const predictions = await MODEL.estimateFaces(imageData, false)
    postMessage({
      exec: "engineDetect",
      payload: {
        predictions,
      },
    })
  } catch (error) {
    postMessage({
      exec: "debug",
      payload: error,
    })
    throw error
  }
}

async function terminate(payload) {
  MODEL = null
}