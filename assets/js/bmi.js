const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const form = document.querySelector('#form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  resultCalculateBMI();
});

const resultCalculateBMI = () => {
  let formulaBMI = weight.value / (height.value / 100) ** 2;
  let results = formulaBMI.toFixed(1);

  let BMICategory = '';
  let descriptionCategory = '';
  let imageStatus = '';
  if (results < 18.5) {
    BMICategory = 'Underweight';
    descriptionCategory =
      'Wahh berat badan kamu sudah dibawah batas berat normal nih sobat!! Sekarang kamu harus mulai mengatur pola makanan nih. Biar berat badan kamu cepat naik kamu perlu menambah konsumsi kalori 2800-3000 per harinya nih sobat. Makan yang lebih banyak ya sobat!! ';
    imageStatus = '<img src="./assets/images/underweight.png" alt="" width="140" height="240">';
  }
  if (results >= 18.5 && results <= 24.9) {
    BMICategory = 'Normal';
    descriptionCategory = 'Wahh hebat berat badan kamu normal nih sobat!! Itu artinya berat badan kamu tidak kurang ataupun berlebih. Pertahankan berat badan idealmu dengan mengonsumsi kalori 2500 per hari ya sobat!!';
    imageStatus = '<img src="./assets/images/normal.png" alt="" width="140" height="240">';
  }
  if (results >= 25 && results <= 29.9) {
    BMICategory = 'Overweight';
    descriptionCategory =
      'Wahh berat badan kamu sudah melebihi batas berat normal nih sobat!! Sekarang kamu harus mulai mengatur pola makanan nih. Biar berat badan kamu cepat turun kamu perlu konsumsi kalori 1100-1600 per harinya nih sobat. Jangan sampai kelebihan kalori yaa';
    imageStatus = '<img src="./assets/images/overweight.png" alt="" width="121" height="240">';
  }
  if (results >= 30) {
    BMICategory = 'Obesity';
    descriptionCategory =
      'Berat badan kamu sudah masuk ke kategory Obesitas sobat!! Sekarang kamu harus mulai mengatur pola makanan dan juga olah raga agar kamu dapat membakar kalori. Biar berat badan kamu cepat turun kamu perlu konsumsi kalori 1100-1600 per harinya nih sobat. Jangan sampai kelebihan kalori yaa ';
    imageStatus = '<img src="./assets/images/obesity.png" alt="" width="140" height="240">';
  }
  form.reset();
  result.innerHTML = `<section class=" container result-score col-lg-2 text-center col-sm-12">
                        <h3>Hasil Score</h3>
                        <h4>${results}</h4>
                      </section>

                      <section class=" container result-categry d-flex justify-content-center align-items-center mt-5 col-lg-8 col-sm-12">
                          <div class="section-image col-lg-3 col-sm-12">
                            ${imageStatus}
                          </div>
                          <div class="section-result-category col-lg-9 col-sm-12">
                            <h2 class="category" id="category">${BMICategory}</h2>
                            <p class="description-category" id="ddescription-category">
                              ${descriptionCategory}
                            </p>
                          </div>
                      </section>`;

  return BMICategory;
};

export { resultCalculateBMI };
