<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="styl.css">
        <title>Gry komputerowe</title>
    </head>
    <body>
        <header>
            <h3>Ranking gier komputerowych</h3>
        </header>
        <main>
            <section id="lewa">
                <h3>Top 5 gier w tym miesiącu</h3>
                <ul>

                    <?php
                    ?>

                </ul>
                <h3>Nasz sklep</h3>
                <a href="http://sklep.gry.pl">Tu kupisz gry</a>
                <h3>Stronę wykonał</h3>
                <p>Dmytro Lukianchuk</p>
            </section>

            <section id="srodek">

                <?php
                ?>

            </section>

            <section id="prawa">
                <h3>Dodaj nową grę</h3>
                <form method="post" action="gry.php">
                    <label>Nazwa</label><br><input type="text" id="nazwa"><br>
                    <label>Opis</label><br><input type="text" id="opis"><br>
                    <label>Cena</label><br><input type="text" id="cena"><br>
                    <label>Zdjęcie</label><br><input type="text" id="zdjecie"><br><br>
                    <input type="submit" value="Dodaj">
                </form>
            </section>
        </main>
        <footer>
            <form method="post" action="gry.php">
                <input type="text"><input type="submit" value="Pokaż opis">
            </form>
            <?php
            ?>
        </footer>
    </body>
</html>