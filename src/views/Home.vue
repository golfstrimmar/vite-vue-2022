<template lang="pug">

.container

  p Hallo zusammen! 
  p Mein Name ist Victor. Meine Muttersprache ist Russisch. Ich lebe seit etwas mehr als einem Jahr in Deutschland und lerne parallel Deutsch.
  p Die Idee zu dieser App entstand, nachdem mir klar wurde, dass ich nicht wirklich sprechen kann, obwohl ich schon viel über diese Sprache wusste. Ich beschloss, einen Simulator zu bauen, um Sprachkonstrukte zu trainieren. Ich habe mir das Ziel gesetzt, die fertigen Sätze nicht zu wiederholen, sondern sie selbst zu erstellen. Dies erwies sich als viel schwieriger, als die Lücken in einem Satz mit vorher geschriebenen Wörtern zu füllen. Es stimmt, man muss geduldig sein und buchstäblich einige Lösungen verkaufen. Das ist nicht der einfachste Weg, aber es funktioniert für mich! Vielleicht wird diese App jemandem helfen oder die Fantasie wecken.
  p Jetzt zur App selbst. Die Simulatoren sind nach einem thematischen Prinzip unterteilt. Russische Sätze werden fast nie richtig ins Deutsche übersetzt und bedeuten vielmehr eine Aufgabe oder Situation, die auf Deutsch reproduziert werden sollte. Jedes Wort nimmt einen Platz ein. Sie müssen nach Wörtern suchen, bis Sie den vollständigen Satz erhalten. Beachten Sie die Punkte und Kommas. Sie nehmen auch Platz ein. Wenn das Feld grün wird, bedeutet dies, dass das Wort korrekt geschrieben ist und an der richtigen Stelle ist.
  p Hier werden keine Themen gesammelt, die für das Lernen notwendig sind, sondern solche, die nicht vermieden werden können.
  p Für Programmierer: Die App ist in Vue geschrieben. Firebase-Hosting wurde verwendet.  Der Sammler ist Vite. Pinia, Pug, Scss.
  p Feedback 
    span._innerspan yushinbox@gmail.com.
  p Viel Spass beim ausprobieren!
</template>


<script setup>
</script>

<style  lang="scss" >
p {
  line-height: 1.2;
  color: $grey-10;

  ._innerspan {
    color: $red-14;
  }
}
</style>
