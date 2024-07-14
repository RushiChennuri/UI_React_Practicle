package com.user.ReactUserData.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.ReactUserData.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
