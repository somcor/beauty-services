export const filterData = ({data, filters}) => {
    const filtered = data.filter(item => {
        let matched = true;

        Object.keys(filters).map((key, index) => {
            if (matched) {
                if (key === 'searchString') {
                    item.title.toLowerCase().indexOf(filters[key].toLowerCase()) !== -1 ? matched = true : matched = false;
                } else {
                    item[key] === filters[key] ? matched = true : matched = false;
                }
            }
            return null;
        });
        return matched;
    });

    return filtered;
}