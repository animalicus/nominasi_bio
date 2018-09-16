$(function () {
  var availableTags = [
    "Ahmad Rizaldy Fanbudy", "Ane Yuliani", "Anna Nurul Alfyah", "Detia Marwaliati", "Dinda Permatasari", "Dwi Rahayu Lestari Noviani", "Emila Susheno", "Febby Rizkamariana", "Gina Sonia", "Glory Gelarich S", "Hanifa Ahsanu Amala", "Hanna Aulia", "Harsyaniati", "Hasna Fathin Nurafifah", "Kandini Rizki Kurfika", "Karina Rachma", "Meilinda Alfiana", "Mely Yani", "Muh Dwiky Julian", "Muhammad Ihsan Alawi", "Muh. Muhtar Khoiri Abdi", "N. Sri Winarsih Winata", "Nida Fadhilla Nafisah", "Nizhar Rismawan", "Puti Mayang Sari", "Reza Reyhan", "Rifal Firmansyah", "Rima", "Riska Sulastri", "Rizka Fahma Sabila Haque", "Rosna Istarie", "Sasha Elitzsar Latfia", "Satya Peric Enrico", "Siti Aina Hayyani", "Siti Halimatusya", "Sulastri Eka Mardiah", "Syifa Fauziah", "Tasya Fhadilah Ayu Rismawantie", "Titan Putrianti", "Tri Indah Ramadina", "Uswatun Hasanah", "Vidia Damayanti", "Weny Wahyuni Piras", "Yayang Yuliani", "Abhelia Permata Sari", "Aida Cendrawati U.", "Alhayatul Luthfi M.", "Anggi Indah Lestari", "Anna Destriana F.", "Auliya Maimun M.", "Dei Unzila Rahmah", "Desy Rahmayunita", "Eka Dian Safitri", "Erlien Roito", "Fathimah Nurul A.", "Fiqa Islamiati", "Gita Sonya", "Hani Solihah", "Hema Chiliandita", "Husnul Hotimah", "Ina Septarina", "Indah Putri Fitriani", "Ismi Nurjanah", "Kartika Nahdiyati", "Kultum Afifah", "Lina Indrawati", "Mutia Audi S.", "Nadiya Syafia Shani", "Nina Yuli", "Nisrina Avhiasyifa", "Noviyani Nurjamilah", "Puspita Sari", "Putri Nurul F.", "Ramadhayanti", "Resti Lutfiani", "Sarah Meilani F.", "Siti Abriyanti", "Sundy M. Sorta S.", "Ulfah Milati Rahmah", "Wahyu Fadzilla N.", "Yunni Handayanie", "Zeiny Sofiani M.", "Afini Zulfa Nabila", "Ajeng Vadila Tussa'adah", "Amanda Adistya", "Anggi Meinawan I", "Anggun Prima Persadasari", "Annisa Aprinandri Irwin", "Atina Maulaya F", "Canthika Trinaya", "Decyana Wahyudin", "Dewani Tediana Yusepany", "Dwi Gusrianti", "Dwi Surya Artie", "Eka Indah C. T", "Fajar Sukma Perdana", "Frizka Ayuningtyas", "Ihsan Mulyadi Kurniawan", "Irvan Chaerul Apandi", "Johar Arifin", "Julia Francesca", "Kemas Muhammad Abiyyu", "Kezia Reinaria", "Leni Silfani", "Mutmaina", "Nabila Nur Assyifa", "Nadia Insani", "Nadiah R. Aisy", "Nadya Dwi Astatanti", "Naufan Aldi S", "Neng Dina Mardiani", "Nur Rohmah W", "Pinka Alisa Diena Shafa", "Raden Ahmad Yassin A", "Rai Irtifaul Fikri", "Rena Marwina", "Reza Ahmad Taufik", "Rifa Triana", "Rila Nadhira Dahlan", "Risdianan Fauziah", "Royyan Awalia Safaris", "Satrio Haryo Benowo", "Silmi Qurrotu Aini", "Siti Nur Endah", "Siti Rahmadani", "Sylviani Aulia Rahma", "Tiara Dewanti Puteri S", "Try Kurniawan Mutaqien", "Ubaydillah Zedd M", "Wahyu Setia Widodo", "Yeyen Wijaya"
  ];
  $("#names").autocomplete({
    source: availableTags
  });
});

var $form = $('form#test-form'),
  url = 'https://script.google.com/macros/s/AKfycbx2TP_w_pAgrkTUO5ax8eZNZyUFXaX2azTYMKv7bRBNSd_kSlOM/exec'

$('#submit-form').on('click', function (e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "POST",
    dataType: "json",
    data: $form.serializeObject(),
	
  })
  location.href = 'done.html'
});