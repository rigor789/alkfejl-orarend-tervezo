package hu.elte.alkfejl.orarend.service;

import hu.elte.alkfejl.orarend.model.User;
import hu.elte.alkfejl.orarend.model.UserComment;
import hu.elte.alkfejl.orarend.repository.UserRepository;
import hu.elte.alkfejl.orarend.service.exceptions.InvalidUserException;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class UserService {

    private final UserRepository userRepository;

    private User user;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User login(User user) throws InvalidUserException {
        if (this.isValid(user)) {
            return this.user = userRepository.findByUsername((user.getUsername())).get();
        }
        throw new InvalidUserException();
    }

    public User register(User user) {
        user.setRole(User.Role.USER);
        this.user = userRepository.save(user);

        return this.user;
    }

    public User update(int id, User user) {
        User currentUser = this.userRepository.findOne(id);
        currentUser.setUsername(user.getUsername());
        currentUser.setEmail(user.getEmail());
        currentUser.setPassword(user.getPassword());

        return this.userRepository.save(currentUser);
    }

    public boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }

    public boolean isLoggedIn() {
        return this.user != null;
    }

    public User comment(int id, UserComment comment) {
        User user = this.userRepository.findOne(id);
        user.getComments().add(comment);

        return this.userRepository.save(user);
    }

    public void delete(int id) {
        this.userRepository.delete(id);
    }

    public void deleteComment(int user_id, int comment_id) {
        User user = this.userRepository.findOne(user_id);
        user.getComments().removeIf(comment -> comment.getId() == comment_id);

        this.userRepository.save(user);
    }
}
