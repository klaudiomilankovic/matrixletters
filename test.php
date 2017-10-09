<?php

for ($i=0; $i < 500 ; $i++) { ?>
    .letter:nth-child(<?php echo $i ?>):before {
        animation-delay: <?php echo(rand(-2000, -1));?>ms;
    }
<?php } ?>