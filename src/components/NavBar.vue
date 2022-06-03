<script setup>
import router from '../router';
import { useUserStore } from '../services/userStore';

const {user, logout} = useUserStore()

const handleLogout = () => {
    logout()
    router.push("/login")
}

</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/vfor">Exo v-for</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active" aria-current="page" to="/counter">Exo counter</RouterLink>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li> -->
                </ul>
                <div class="d-flex" role="search">
                    <span class="nav-link" v-if="user">Hello {{user.name}}</span>
                    <RouterLink v-if="!user" class="nav-link active" aria-current="page" to="/login">Login</RouterLink>
                    <div v-if="user" class="nav-link" aria-current="page" @click="handleLogout">Logout</div>
                </div>
            </div>
        </div>
    </nav>
</template>