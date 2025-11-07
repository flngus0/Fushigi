#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    int temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    int temp_16;
    uint temp_17;
    uint temp_18;
    int temp_19;
    precise float temp_20;
    int temp_21;
    uint temp_22;
    uint temp_23;
    int temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    int temp_37;
    uint temp_38;
    uint temp_39;
    int temp_40;
    precise float temp_41;
    int temp_42;
    uint temp_43;
    int temp_44;
    precise float temp_45;
    int temp_46;
    uint temp_47;
    uint temp_48;
    int temp_49;
    precise float temp_50;
    int temp_51;
    uint temp_52;
    int temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400370001 Mov
    // 0x000010: 0xEFD87F800807FF06 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A1A F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400A70008 Mov
    // 0x000030: 0xEFD87F801047FF16 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C98079400B70018 Mov
    // 0x000048: 0xEFD87F800847FF03 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400270017 Mov
    // 0x000058: 0xEFD87F800A07FF00 Ald
    temp_5 = in_attr2.x;
    // 0x000068: 0x4C9807940127000F Mov
    // 0x000070: 0xEFD87F800907FF05 Ald
    temp_6 = in_attr1.x;
    // 0x000078: 0x3848000000471A1A Shl
    temp_7 = temp_2 << 4;
    // 0x000088: 0xEFD87F800887FF10 Ald
    temp_8 = in_attr0.z;
    // 0x000090: 0x4C98079401370004 Mov
    // 0x000098: 0xEFD87F800947FF07 Ald
    temp_9 = in_attr1.y;
    // 0x0000A8: 0x4C68101000070611 Fmul
    temp_10 = temp_0 * vp_c4.data[0].x;
    // 0x0000B0: 0xEFD87F801007FF15 Ald
    temp_11 = in_attr8.x;
    // 0x0000B8: 0x4C6810100047060D Fmul
    temp_12 = temp_0 * vp_c4.data[1].x;
    // 0x0000C8: 0xEFD87F800A47FF0B Ald
    temp_13 = in_attr2.y;
    // 0x0000D0: 0x4C68101000870606 Fmul
    temp_14 = temp_0 * vp_c4.data[2].x;
    // 0x0000D8: 0xEFD87F800A87FF0A Ald
    temp_15 = in_attr2.z;
    // 0x0000E8: 0xEF94007068871A12 Ldc
    temp_16 = temp_7 + 0x688;
    temp_17 = uint(temp_16) >> 2;
    temp_18 = temp_17 >> 2;
    temp_19 = int(temp_17) & 3;
    temp_20 = vp_c7.data[int(temp_18)][temp_19];
    // 0x0000F0: 0xEF94007048871A14 Ldc
    temp_21 = temp_7 + 0x488;
    temp_22 = uint(temp_21) >> 2;
    temp_23 = temp_22 >> 2;
    temp_24 = int(temp_22) & 3;
    temp_25 = vp_c7.data[int(temp_23)][temp_24];
    // 0x0000F8: 0x51A000940057160E Ffma
    temp_26 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000108: 0x49A0089000170311 Ffma
    temp_27 = fma(temp_4, vp_c4.data[0].y, temp_10);
    // 0x000110: 0x49A006900057030D Ffma
    temp_28 = fma(temp_4, vp_c4.data[1].y, temp_12);
    // 0x000118: 0x49A0031000970306 Ffma
    temp_29 = fma(temp_4, vp_c4.data[2].y, temp_14);
    // 0x000128: 0x4C6810100007000C Fmul
    temp_30 = temp_5 * vp_c4.data[0].x;
    // 0x000130: 0x4C6810100087001C Fmul
    temp_31 = temp_5 * vp_c4.data[2].x;
    // 0x000138: 0x4C6810100047001D Fmul
    temp_32 = temp_5 * vp_c4.data[1].x;
    // 0x000148: 0x51A0041400C71608 Ffma
    temp_33 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x000150: 0x51A00C1400D71618 Ffma
    temp_34 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000158: 0x51A00B9400471617 Ffma
    temp_35 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000168: 0x51A007940147160F Ffma
    temp_36 = fma(temp_3, vp_c5.data[4].z, vp_c5.data[5].x);
    // 0x000170: 0xEF95007068071A00 Ldc
    temp_37 = temp_7 + 0x680;
    temp_38 = uint(temp_37) >> 2;
    temp_39 = temp_38 >> 2;
    temp_40 = int(temp_38) & 3;
    temp_41 = vp_c7.data[int(temp_39)][temp_40];
    temp_42 = int(temp_38) + 1;
    temp_43 = uint(temp_42) >> 2;
    temp_44 = temp_42 & 3;
    temp_45 = vp_c7.data[int(temp_43)][temp_44];
    // 0x000178: 0xEF95007048071A02 Ldc
    temp_46 = temp_7 + 0x480;
    temp_47 = uint(temp_46) >> 2;
    temp_48 = temp_47 >> 2;
    temp_49 = int(temp_47) & 3;
    temp_50 = vp_c7.data[int(temp_48)][temp_49];
    temp_51 = int(temp_47) + 1;
    temp_52 = uint(temp_51) >> 2;
    temp_53 = temp_51 & 3;
    temp_54 = vp_c7.data[int(temp_52)][temp_53];
    // 0x000188: 0x51A0021401571616 Ffma
    temp_55 = fma(temp_3, vp_c5.data[4].w, vp_c5.data[5].y);
    // 0x000190: 0xEFD87F800987FF04 Ald
    temp_56 = in_attr1.z;
    // 0x000198: 0x4C68101000070509 Fmul
    temp_57 = temp_6 * vp_c4.data[0].x;
    // 0x0001A8: 0x49A0031000A7101B Ffma
    temp_58 = fma(temp_8, vp_c4.data[2].z, temp_29);
    // 0x0001B0: 0x4C6810100087051E Fmul
    temp_59 = temp_6 * vp_c4.data[2].x;
    // 0x0001B8: 0x4C68101000470519 Fmul
    temp_60 = temp_6 * vp_c4.data[1].x;
    // 0x0001C8: 0x49A0061000170B13 Ffma
    temp_61 = fma(temp_13, vp_c4.data[0].y, temp_30);
    // 0x0001D0: 0x49A0089000271011 Ffma
    temp_62 = fma(temp_8, vp_c4.data[0].z, temp_27);
    // 0x0001D8: 0x49A0049000170706 Ffma
    temp_63 = fma(temp_9, vp_c4.data[0].y, temp_57);
    // 0x0001E8: 0x49A00C1400971509 Ffma
    temp_64 = fma(temp_11, vp_c5.data[2].y, temp_34);
    // 0x0001F0: 0x49A0069000671018 Ffma
    temp_65 = fma(temp_8, vp_c4.data[1].z, temp_28);
    // 0x0001F8: 0xEFD87F800AC7FF10 Ald
    temp_66 = in_attr2.w;
    // 0x000208: 0x4C58101000B71B1B Fadd
    temp_67 = temp_58 + vp_c4.data[2].w;
    // 0x000210: 0xEFF07F800DC7FF09 Ast
    out_attr5.w = temp_64;
    // 0x000218: 0x49A00E1000970B0C Ffma
    temp_68 = fma(temp_13, vp_c4.data[2].y, temp_31);
    // 0x000228: 0x4C58101000771818 Fadd
    temp_69 = temp_65 + vp_c4.data[1].w;
    // 0x000230: 0x49A00E9000570B0B Ffma
    temp_70 = fma(temp_13, vp_c4.data[1].y, temp_32);
    // 0x000238: 0x49A00F1000970705 Ffma
    temp_71 = fma(temp_9, vp_c4.data[2].y, temp_59);
    // 0x000248: 0x49A00C9000570707 Ffma
    temp_72 = fma(temp_9, vp_c4.data[1].y, temp_60);
    // 0x000250: 0x59A0090001471B12 Ffma
    temp_73 = fma(temp_67, temp_25, temp_20);
    // 0x000258: 0x49A0099000270A13 Ffma
    temp_74 = fma(temp_15, vp_c4.data[0].z, temp_61);
    // 0x000268: 0x49A0041400871508 Ffma
    temp_75 = fma(temp_11, vp_c5.data[2].x, temp_33);
    // 0x000270: 0x4C58101000371111 Fadd
    temp_76 = temp_62 + vp_c4.data[0].w;
    // 0x000278: 0xEFF07F800D87FF08 Ast
    out_attr5.z = temp_75;
    // 0x000288: 0x59A0008000371801 Ffma
    temp_77 = fma(temp_69, temp_54, temp_45);
    // 0x000290: 0x4C5810180BA71203 Fadd
    temp_78 = temp_73 + vp_c6.data[46].z;
    // 0x000298: 0x49A0031000270406 Ffma
    temp_79 = fma(temp_56, vp_c4.data[0].z, temp_63);
    // 0x0002A8: 0x49A00B940007150D Ffma
    temp_80 = fma(temp_11, vp_c5.data[0].x, temp_35);
    // 0x0002B0: 0x49A007140017150E Ffma
    temp_81 = fma(temp_11, vp_c5.data[0].y, temp_26);
    // 0x0002B8: 0xEFF07F800D07FF0D Ast
    out_attr5.x = temp_80;
    // 0x0002C8: 0x49A007940107150F Ffma
    temp_82 = fma(temp_11, vp_c5.data[4].x, temp_36);
    // 0x0002D0: 0xEFF07F800D47FF0E Ast
    out_attr5.y = temp_81;
    // 0x0002D8: 0x49A00B1401171516 Ffma
    temp_83 = fma(temp_11, vp_c5.data[4].y, temp_55);
    // 0x0002E8: 0xEFF07F800E07FF0F Ast
    out_attr6.x = temp_82;
    // 0x0002F0: 0x49A0061000A70A0C Ffma
    temp_84 = fma(temp_15, vp_c4.data[2].z, temp_68);
    // 0x0002F8: 0xEFF07F800E47FF16 Ast
    out_attr6.y = temp_83;
    // 0x000308: 0x49A0059000670A0B Ffma
    temp_85 = fma(temp_15, vp_c4.data[1].z, temp_70);
    // 0x000310: 0x49A0029000A70405 Ffma
    temp_86 = fma(temp_56, vp_c4.data[2].z, temp_71);
    // 0x000318: 0x49A0039000670407 Ffma
    temp_87 = fma(temp_56, vp_c4.data[1].z, temp_72);
    // 0x000328: 0x4C5810180B97010A Fadd
    temp_88 = temp_77 + vp_c6.data[46].y;
    // 0x000330: 0x4C6810180C670315 Fmul
    temp_89 = temp_78 * vp_c6.data[49].z;
    // 0x000338: 0x4C6810180C270314 Fmul
    temp_90 = temp_78 * vp_c6.data[48].z;
    // 0x000348: 0x4C6810180CA70317 Fmul
    temp_91 = temp_78 * vp_c6.data[50].z;
    // 0x000350: 0x5C68100001371304 Fmul
    temp_92 = temp_74 * temp_74;
    // 0x000358: 0x5C68100000670608 Fmul
    temp_93 = temp_79 * temp_79;
    // 0x000368: 0x59A0000000271111 Ffma
    temp_94 = fma(temp_76, temp_50, temp_41);
    // 0x000370: 0x49A00A980C570A03 Ffma
    temp_95 = fma(temp_88, vp_c6.data[49].y, temp_89);
    // 0x000378: 0x49A00A180C170A02 Ffma
    temp_96 = fma(temp_88, vp_c6.data[48].y, temp_90);
    // 0x000388: 0x49A00B980C970A00 Ffma
    temp_97 = fma(temp_88, vp_c6.data[50].y, temp_91);
    // 0x000390: 0x59A0020000B70B15 Ffma
    temp_98 = fma(temp_85, temp_85, temp_92);
    // 0x000398: 0x59A0040000770714 Ffma
    temp_99 = fma(temp_87, temp_87, temp_93);
    // 0x0003A8: 0x4C68100C00471104 Fmul
    temp_100 = temp_94 * vp_c3.data[1].x;
    // 0x0003B0: 0x4C68100C0087110A Fmul
    temp_101 = temp_94 * vp_c3.data[2].x;
    // 0x0003B8: 0x4C68100C00071108 Fmul
    temp_102 = temp_94 * vp_c3.data[0].x;
    // 0x0003C8: 0x4C5810180B871109 Fadd
    temp_103 = temp_94 + vp_c6.data[46].x;
    // 0x0003D0: 0x4C58300C02F71117 Fadd
    temp_104 = 0.0 - vp_c3.data[11].w;
    temp_105 = temp_94 + temp_104;
    // 0x0003D8: 0x4C5830180B071111 Fadd
    temp_106 = 0.0 - vp_c6.data[44].x;
    temp_107 = temp_94 + temp_106;
    // 0x0003E8: 0xEFF07F800B07FF17 Ast
    out_attr3.x = temp_105;
    // 0x0003F0: 0x49A001980C47090F Ffma
    temp_108 = fma(temp_103, vp_c6.data[49].x, temp_95);
    // 0x0003F8: 0x59A00A8000C70C15 Ffma
    temp_109 = fma(temp_84, temp_84, temp_98);
    // 0x000408: 0x59A00A0000570514 Ffma
    temp_110 = fma(temp_86, temp_86, temp_99);
    // 0x000410: 0x49A0020C00570103 Ffma
    temp_111 = fma(temp_77, vp_c3.data[1].y, temp_100);
    // 0x000418: 0x5080000000571414 Mufu
    temp_112 = inversesqrt(temp_110);
    // 0x000428: 0x4C6810180387110E Fmul
    temp_113 = temp_107 * vp_c6.data[14].x;
    // 0x000430: 0x49A001180C070911 Ffma
    temp_114 = fma(temp_103, vp_c6.data[48].x, temp_96);
    // 0x000438: 0x5080000000571502 Mufu
    temp_115 = inversesqrt(temp_109);
    // 0x000448: 0x49A0050C00970104 Ffma
    temp_116 = fma(temp_77, vp_c3.data[2].y, temp_101);
    // 0x000450: 0x49A000180C870900 Ffma
    temp_117 = fma(temp_103, vp_c6.data[50].x, temp_97);
    // 0x000458: 0x4C5810100207120A Fadd
    temp_118 = temp_73 + vp_c4.data[8].x;
    // 0x000468: 0x49A0040C00170108 Ffma
    temp_119 = fma(temp_77, vp_c3.data[0].y, temp_102);
    // 0x000470: 0x4C58300C03370118 Fadd
    temp_120 = 0.0 - vp_c3.data[12].w;
    temp_121 = temp_77 + temp_120;
    // 0x000478: 0x4C5830180B17010D Fadd
    temp_122 = 0.0 - vp_c6.data[44].y;
    temp_123 = temp_77 + temp_122;
    // 0x000488: 0xEFF07F800B47FF18 Ast
    out_attr3.y = temp_121;
    // 0x000490: 0x4C6810180BB70015 Fmul
    temp_124 = temp_117 * vp_c6.data[46].w;
    // 0x000498: 0x49A0018C00670A01 Ffma
    temp_125 = fma(temp_118, vp_c3.data[1].z, temp_111);
    // 0x0004A8: 0xEFF07F801087FF15 Ast
    out_attr8.z = temp_124;
    // 0x0004B0: 0x49A0020C00A70A00 Ffma
    temp_126 = fma(temp_118, vp_c3.data[2].z, temp_116);
    // 0x0004B8: 0x49A0040C00270A0A Ffma
    temp_127 = fma(temp_118, vp_c3.data[0].z, temp_119);
    // 0x0004C8: 0x49A0040C00271208 Ffma
    temp_128 = fma(temp_73, vp_c3.data[0].z, temp_119);
    // 0x0004D0: 0x5C68100001470606 Fmul
    temp_129 = temp_79 * temp_112;
    // 0x0004D8: 0x5C68100000270C0C Fmul
    temp_130 = temp_84 * temp_115;
    // 0x0004E8: 0xEFF07F800807FF06 Ast
    out_attr0.x = temp_129;
    // 0x0004F0: 0x4C6810180BB70F0F Fmul
    temp_131 = temp_108 * vp_c6.data[46].w;
    // 0x0004F8: 0xEFF07F800987FF0C Ast
    out_attr1.z = temp_130;
    // 0x000508: 0x49A0018C00671203 Ffma
    temp_132 = fma(temp_73, vp_c3.data[1].z, temp_111);
    // 0x000510: 0xEFF07F801047FF0F Ast
    out_attr8.y = temp_131;
    // 0x000518: 0x4C58100C00370808 Fadd
    temp_133 = temp_128 + vp_c3.data[0].w;
    // 0x000528: 0x49A0071803970D09 Ffma
    temp_134 = fma(temp_123, vp_c6.data[14].y, temp_113);
    // 0x000530: 0x5C68100000270B0B Fmul
    temp_135 = temp_85 * temp_115;
    // 0x000538: 0x5C68100001470505 Fmul
    temp_136 = temp_86 * temp_112;
    // 0x000548: 0xEFF07F800947FF0B Ast
    out_attr1.y = temp_135;
    // 0x000550: 0x4C5830180B27120E Fadd
    temp_137 = 0.0 - vp_c6.data[44].z;
    temp_138 = temp_73 + temp_137;
    // 0x000558: 0xEFF07F800887FF05 Ast
    out_attr0.z = temp_136;
    // 0x000568: 0x5C68100000271302 Fmul
    temp_139 = temp_74 * temp_115;
    // 0x000570: 0x5C68100000670C0F Fmul
    temp_140 = temp_130 * temp_129;
    // 0x000578: 0xEFF07F800907FF02 Ast
    out_attr1.x = temp_139;
    // 0x000588: 0x5C68100001470707 Fmul
    temp_141 = temp_87 * temp_112;
    // 0x000590: 0x49A0020C00A71204 Ffma
    temp_142 = fma(temp_73, vp_c3.data[2].z, temp_116);
    // 0x000598: 0xEFF07F800847FF07 Ast
    out_attr0.y = temp_141;
    // 0x0005A8: 0x4C58100C00770303 Fadd
    temp_143 = temp_132 + vp_c3.data[1].w;
    // 0x0005B0: 0x4C68101802C70808 Fmul
    temp_144 = temp_133 * vp_c6.data[11].x;
    // 0x0005B8: 0x5C68100000570B0D Fmul
    temp_145 = temp_135 * temp_136;
    // 0x0005C8: 0x49A0049803A70E0E Ffma
    temp_146 = fma(temp_138, vp_c6.data[14].z, temp_134);
    // 0x0005D0: 0x59A207800057020F Ffma
    temp_147 = 0.0 - temp_140;
    temp_148 = fma(temp_139, temp_136, temp_147);
    // 0x0005D8: 0x5C68100000770209 Fmul
    temp_149 = temp_139 * temp_141;
    // 0x0005E8: 0x4C98079803C70005 Mov
    // 0x0005F0: 0x4C58100C00B70404 Fadd
    temp_150 = temp_142 + vp_c3.data[2].w;
    // 0x0005F8: 0x49A0041802D70303 Ffma
    temp_151 = fma(temp_143, vp_c6.data[11].y, temp_144);
    // 0x000608: 0xEFF07F800C87FF04 Ast
    out_attr4.z = temp_150;
    // 0x000610: 0x4C58100C00370A0A Fadd
    temp_152 = temp_127 + vp_c3.data[0].w;
    // 0x000618: 0x59A2048000670B09 Ffma
    temp_153 = 0.0 - temp_149;
    temp_154 = fma(temp_135, temp_129, temp_153);
    // 0x000628: 0x51A0029803B70E0E Ffma
    temp_155 = fma(temp_146, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000630: 0x4C98079803070005 Mov
    // 0x000638: 0xEFF07F800F47FF0E Ast
    out_attr7.y = temp_155;
    // 0x000648: 0x49A0019802E70403 Ffma
    temp_156 = fma(temp_150, vp_c6.data[11].z, temp_151);
    // 0x000650: 0x4C68100C02070A02 Fmul
    temp_157 = temp_152 * vp_c3.data[8].x;
    // 0x000658: 0x4C68100C02870A06 Fmul
    temp_158 = temp_152 * vp_c3.data[10].x;
    // 0x000668: 0x4C68100C02470A04 Fmul
    temp_159 = temp_152 * vp_c3.data[9].x;
    // 0x000670: 0x4C58100C00770101 Fadd
    temp_160 = temp_125 + vp_c3.data[1].w;
    // 0x000678: 0x4C68100C01C70A0A Fmul
    temp_161 = temp_152 * vp_c3.data[7].x;
    // 0x000688: 0x51A0029802F70305 Ffma
    temp_162 = fma(temp_156, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000690: 0x4C58100C00B70000 Fadd
    temp_163 = temp_126 + vp_c3.data[2].w;
    // 0x000698: 0xEFF07F800F07FF05 Ast
    out_attr7.x = temp_162;
    // 0x0006A8: 0x49A0010C02170102 Ffma
    temp_164 = fma(temp_160, vp_c3.data[8].y, temp_157);
    // 0x0006B0: 0x49A0030C02970106 Ffma
    temp_165 = fma(temp_160, vp_c3.data[10].y, temp_158);
    // 0x0006B8: 0x49A0020C02570103 Ffma
    temp_166 = fma(temp_160, vp_c3.data[9].y, temp_159);
    // 0x0006C8: 0x49A0050C01D7010A Ffma
    temp_167 = fma(temp_160, vp_c3.data[7].y, temp_161);
    // 0x0006D0: 0x59A2068000770C0D Ffma
    temp_168 = 0.0 - temp_145;
    temp_169 = fma(temp_130, temp_141, temp_168);
    // 0x0006D8: 0x4C58300C03771216 Fadd
    temp_170 = 0.0 - vp_c3.data[13].w;
    temp_171 = temp_73 + temp_170;
    // 0x0006E8: 0x49A0010C02270002 Ffma
    temp_172 = fma(temp_163, vp_c3.data[8].z, temp_164);
    // 0x0006F0: 0xEFF07F800B87FF16 Ast
    out_attr3.z = temp_171;
    // 0x0006F8: 0x49A0030C02A70006 Ffma
    temp_173 = fma(temp_163, vp_c3.data[10].z, temp_165);
    // 0x000708: 0x49A0018C02670003 Ffma
    temp_174 = fma(temp_163, vp_c3.data[9].z, temp_166);
    // 0x000710: 0x49A0050C01E7000A Ffma
    temp_175 = fma(temp_163, vp_c3.data[7].z, temp_167);
    // 0x000718: 0x4C6810180BB71111 Fmul
    temp_176 = temp_114 * vp_c6.data[46].w;
    // 0x000728: 0x5C68100001070D0D Fmul
    temp_177 = temp_169 * temp_66;
    // 0x000730: 0xEFF07F801007FF11 Ast
    out_attr8.x = temp_176;
    // 0x000738: 0x5C68100001070F0F Fmul
    temp_178 = temp_148 * temp_66;
    // 0x000748: 0xEFF07F800A07FF0D Ast
    out_attr2.x = temp_177;
    // 0x000750: 0x5C68100001070909 Fmul
    temp_179 = temp_154 * temp_66;
    // 0x000758: 0xEFF07F800A47FF0F Ast
    out_attr2.y = temp_178;
    // 0x000768: 0x4C58100C02370202 Fadd
    temp_180 = temp_172 + vp_c3.data[8].w;
    // 0x000770: 0xEFF07F800A87FF09 Ast
    out_attr2.z = temp_179;
    // 0x000778: 0x4C58100C02B70606 Fadd
    temp_181 = temp_173 + vp_c3.data[10].w;
    // 0x000788: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_180;
    // 0x000790: 0x4C58100C02770303 Fadd
    temp_182 = temp_174 + vp_c3.data[9].w;
    // 0x000798: 0xEFF07F8007C7FF06 Ast
    gl_Position.w = temp_181;
    // 0x0007A8: 0x4C58100C01F70A0A Fadd
    temp_183 = temp_175 + vp_c3.data[7].w;
    // 0x0007B0: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_182;
    // 0x0007B8: 0xEFF07F800707FF0A Ast
    gl_Position.x = temp_183;
    // 0x0007C8: 0xE30000000007000F Exit
    return;
}
