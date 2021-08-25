function apiResponse(res, status1, msg1, data1) {
    var response = {
        status: status1,
        message: msg1,
        data: data1
    }
    res.json(response)
}
exports.apiResponse = apiResponse;