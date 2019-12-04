export function templateAction(id) {
    return {
        type: 'TEMPLATE_ACTION',
        id
    };
}

export function paginationAction(paginationTotal, paginationCount, paginationOffset, paginationData) {
    return {
        type: 'PAGINATION',
        paginationTotal,
        paginationCount,
        paginationOffset,
        paginationData
    };
}
