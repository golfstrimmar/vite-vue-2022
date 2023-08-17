<template lang="pug">
section(id='join').join.rel
	.imgs
		img(src='../assets/img/join-bg.webp' alt='img')
	.container
		.join__body
			.join__title
				h2 Join the club and get the benefits
			.join__text Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
			.join__blocks
				.join__block
					SvgIcon(name='Vector' )
					span Exclusive offers
				.join__block
					SvgIcon(name='Vector' )
					span Free events
				.join__block
					SvgIcon(name='Vector' )
					span Large discounts
			JoinForm(bgInput='white' colorButton='dark-deep')
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/Button.vue'
import JoinForm from '@/components/JoinForm.vue'
import SvgIcon from './SvgIcon.vue'
</script>

<style scoped lang="scss">
.join {
  margin: 60px 0 0 0;
 
  &__body {
    @include flex-column;
    align-items: center;
    padding: 97px 0 86px 0;
    max-width: 494px;
    margin: 0 auto;
  }

  &__title {
    h2 {
      color: $white;
      @include Headings-H2;
    }
  }

  &__text {
    color: $white;
    text-align: center;
    @include Body-Large;
    margin: 12px 10px 0;
  }

  &__blocks {
    display: flex;
    align-items: center;
    column-gap: 36px;
    margin: 30px 0 0 0;
  }

  &__block {
    @include flex-aligne-center;
    column-gap: 8px;
    svg {
      width: 16px;
      height: 16px;
    }
    span {
      color: $white;
      @include BodyMedium;
    }
  }
  &__form {
    margin: 40px 0 0 0;
    min-width: 472px;
  }
}

.join-form {
  @include flex-aligne-center;
  height: 56px;

  input {
    @include flex-aligne-center;
    padding: 17px 0px 17px 32px;
    flex: 1 0 0;
    align-self: stretch;
    transition: all 0.2s;

    &::placeholder {
      text-align: left;
      opacity: 0.2;
    }

    &.white {
      background: $white;

      &::placeholder {
        @include Text-Style-5;
      }

      &:hover {
        background: lighten($primary, 40%);
      }
    }

    &.dark {
      background: $light-grey-15;

      &::placeholder {
        opacity: 1;
        @include Text-Style-8;
      }

      &:hover {
        background: lighten($primary, 40%);
      }
    }
  }
}

@media (max-width: 767px) {

.join {
  margin: 32px 0 0 0;
 
  &__body {
    @include flex-column;
    align-items: start;
    padding: 24px 0;
    max-width: 494px;
    margin: 0 auto;
  }

  &__title {
    h2 {
      color: $white;
      @include Headings-H3;
    }
  }

  &__text {
    color: $white;
    text-align: left;
    @include BodySmall;
    margin: 12px 0px 0;
  }

  &__blocks {
    @include flex-column;
    align-items: start;
    gap: 8px 0px;
    margin: 30px 0 0 0;
  }

  &__form {
    margin: 28px 0 0 0;
    min-width: 472px;
    width: 100%;
    min-width: 0px;
  }
}

  .join-form {
    input {
      @include flex-aligne-center;
      padding: 17px 0px 17px 32px;
      flex: 1 0 0;
      align-self: stretch;
      transition: all 0.2s;

      &::placeholder {
        text-align: left;
        opacity: 0.2;
      }

      &.white {
        background: $white;

        &::placeholder {
          @include Text-Style-5;
        }

        &:hover {
          background: lighten($primary, 40%);
        }
      }

      &.dark {
        background: $light-grey-15;

        &::placeholder {
          opacity: 1;
          @include Text-Style-8;
        }

        &:hover {
          background: lighten($primary, 40%);
        }
      }
    }
  }
}


</style>
