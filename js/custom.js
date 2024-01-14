$(document).ready(function(){
   
    $('#riwayatInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="riwayat"][value="ada"]').prop('checked', true);
    }
  });

    $('#komplikasiInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="komplikasi"][value="ada"]').prop('checked', true);
    }
  });

    $('#alergiInText').on('input', function(){
    if ($(this).val().trim() !== '') {
      $('input[name="alergi"][value="ada"]').prop('checked', true);
    }
  });


  });