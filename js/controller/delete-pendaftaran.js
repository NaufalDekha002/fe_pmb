function deleteData(IDHAPUS) {
  var pendaftaranId = IDHAPUS;
  var target_url = "https://ws-dito.herokuapp.com/delete-pendaftaran/" + pendaftaranId;

  var confirmation = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
  if (confirmation) {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(target_url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.alert(result.message);
        location.reload();
      })
      .catch((error) => console.log("Error:", error));
  }
}