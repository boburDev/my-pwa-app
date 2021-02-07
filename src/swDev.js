export default function swDev() {
    const ignored = self.__WB_MANIFEST;
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn('response', response)
    })
}