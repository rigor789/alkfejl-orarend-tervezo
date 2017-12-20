package hu.elte.alkfejl.orarend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="USERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends BaseEntity {

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    @ManyToMany(targetEntity = Course.class, cascade = CascadeType.DETACH)
    private List<Course> courses;

    @JoinColumn(name = "user_id")
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, targetEntity = UserComment.class)
    private List<UserComment> comments;

    public enum Role {
        GUEST, USER, ADMIN, DEVELOPER
    }
}
