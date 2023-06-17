function deleteData(IDHAPUS) {
  var jurusanId = IDHAPUS;
  var target_url = "https://ws-dito.herokuapp.com/delete-jurusan/" + jurusanId;

  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(target_url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      alert(result.message);
      location.reload();
    })
    .catch((error) => console.log("Error:", error));
}