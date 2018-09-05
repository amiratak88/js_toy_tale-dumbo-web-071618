const API = "http://localhost:3000/toys"
class toyAdapter {
    static getToys() {
        return fetch(API)
            .then(res => res.json())
    }

    static createNewToy(data) {
        return fetch(`${API}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
            })
    }

    static increaseLikes(id, newLikes) {
        return fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                likes: newLikes
            })
        })
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
            })
    }
}