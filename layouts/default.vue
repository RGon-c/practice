<template>
    <header>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contacts">contacts</NuxtLink>
        <NuxtLink to="/">Main</NuxtLink>
    </header>

    <main>
        <slot/>
    </main>
</template>

<script setup lang="ts">
</script>