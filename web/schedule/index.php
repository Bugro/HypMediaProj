<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
  <link rel="stylesheet" type="text/css" href="/css/calendar.css">
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
      <div id="calendar" class="fc-calendar-container"></div>
      <script type="text/javascript" src="/js/jquery.calendario.js">
      </script>
      <script type="text/javascript" src="/js/data.js">
      </script>
      <script type="text/javascript">
                        $(function() {

                                var cal = $( '#calendar' ).calendario( {
                                                onDayClick : function( $el, $contentEl, dateProperties ) {

                                                        for( var key in dateProperties ) {
                                                                console.log( key + ' = ' + dateProperties[ key ] );
                                                        }

                                                },
                                                caldata : codropsEvents
                                        } ),
                                        $month = $( '#custom-month' ).html( cal.getMonthName() ),
                                        $year = $( '#custom-year' ).html( cal.getYear() );
                        });
      </script>
    </div>
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>
