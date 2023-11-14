const s3 = require("../../conexoes/sdk");

const uploadArquivo = async (path, obj, id) => {
    const arquivo = await s3
        .upload({
            Bucket: process.env.BACKBLAZE_BUCKET,
            Key: `${path}${id}/${obj.originalname}`,
            Body: obj.buffer,
            ContentType: obj.mimetype,
        })
        .promise();

    return arquivo;
};

const deletarArquivo = async (path) => {
    const filename = `${path.split(process.env.ENDPOINT_S3 + "/")[1]}`;

    await s3
        .deleteObject({
            Bucket: process.env.BACKBLAZE_BUCKET,
            Key: decodeURI(filename),
        })
        .promise();
};

module.exports = {
    uploadArquivo,
    deletarArquivo,
};
