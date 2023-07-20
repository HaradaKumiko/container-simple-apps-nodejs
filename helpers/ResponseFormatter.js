export function ResponseFormatter(success, message, meta, data){
    return {
        info: {
            success: success,
            message: message,
            meta: meta || null
        },
        data: data
    }
}