package com.user.ReactUserData.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.ReactUserData.Repository.UserRepository;
import com.user.ReactUserData.model.User;

@Service
public class UserService {

	@Autowired
    private UserRepository userRepository;
	
	public User createUser(User user) {
        return userRepository.save(user);
    }
	
	public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
